import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DownloadLink, { FILE_TYPES, getExtGroup } from './DownloadLink';

import {
  renderFileSize,
  processFileName,
  getFileExtensionFromUrl,
} from '../../helpers/link-utils';

const testData = {
  jpg: {
    href: 'https://www.example.com/test.jpg',
    title: 'Test image',
    group: 'graphic',
    type: 'image/jpeg',
    size: '400b',
    result: 'Download Test image JPG (400B)',
  },
  pdf: {
    href: 'https://www.foo.bar.com/my.folder/file.pdf?value=3.4',
    title: 'A much needed form',
    group: 'Portable Document Format',
    type: 'application/pdf',
    size: '1.67mb',
    result: 'Download A much needed form PDF (1.67MB)',
  },
  txt: {
    href: 'https://www.test.com/file.txt#anchor-link',
    title: 'Some random text file',
    group: 'text file',
    type: 'text/plain',
    size: '321kb',
    result: 'Download Some random text file TXT (321KB)',
  },
  docx: {
    href: 'https://docs.com/mydoc.docx#table-1.1',
    title: 'MS is the best',
    group: 'Word document',
    type:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: '.03GB',
    result: 'Download MS is the best DOCX (0.03GB)',
  },
};

const testSizes = [
  ['400b', '(400<abbr title="Bytes">B</abbr>)'],
  ['1.67mb', '(1.67<abbr title="Megabytes">MB</abbr>)'],
  ['321kb', '(321<abbr title="Kilobytes">KB</abbr>)'],
  ['.03Gb', '(0.03<abbr title="Gigabytes">GB</abbr>)'],
  [0, '(0<abbr title="Bytes">B</abbr>)'],
  [199, '(199<abbr title="Bytes">B</abbr>)'],
  [1000, '(1<abbr title="Kilobytes">KB</abbr>)'],
  [1170, '(1.2<abbr title="Kilobytes">KB</abbr>)'],
  [12345, '(12.3<abbr title="Kilobytes">KB</abbr>)'],
  [3.2e6, '(3.2<abbr title="Megabytes">MB</abbr>)'],
  [4.57e9, '(4.6<abbr title="Gigabytes">GB</abbr>)'],
];

const testIECSizes = [
  [0, '(0<abbr title="Bytes">B</abbr>)'],
  [1000, '(1000<abbr title="Bytes">B</abbr>)'],
  [1050, '(1<abbr title="Kibibytes">KiB</abbr>)'],
  [1170, '(1.1<abbr title="Kibibytes">KiB</abbr>)'],
  [12345, '(12.1<abbr title="Kibibytes">KiB</abbr>)'],
  [3.2e6, '(3.1<abbr title="Mebibytes">MiB</abbr>)'],
  [4.57e9, '(4.3<abbr title="Gibibytes">GiB</abbr>)'],
];

describe('Widget <DownloadLink />', () => {
  describe('utility functions', () => {
    it('should extract out correct extension', () => {
      Object.keys(testData).forEach(key => {
        expect(getFileExtensionFromUrl(testData[key].href)).to.equal(key);
      });
    });
    it('should find the correct extension group & MIME-type', () => {
      Object.keys(testData).forEach(key => {
        const group = getExtGroup(key);
        expect(group).to.equal(testData[key].group);
        expect(FILE_TYPES[group][key]).to.equal(testData[key].type);
      });
    });
    it('should return a rendered file (SI) size JSX', () => {
      testSizes.forEach(size => {
        const wrapper = shallow(<div>{renderFileSize(size[0])}</div>);
        expect(wrapper.html()).to.equal(`<div>${size[1]}</div>`);
        wrapper.unmount();
      });
    });
    it('should return a rendered file (IEC) size JSX', () => {
      testIECSizes.forEach(size => {
        const wrapper = shallow(<div>{renderFileSize(size[0], false)}</div>);
        expect(wrapper.html()).to.equal(`<div>${size[1]}</div>`);
        wrapper.unmount();
      });
    });
    it('should remove invalid filename characters', () => {
      const fileNames = [
        ['foo', 'foo'],
        ['<test>', 'test'],
        ['CON', ''],
        ['><":\\/?|\n\r*1', '1'],
        ['   .', ''],
        ['test.', 'test'],
      ];
      fileNames.forEach(([title, result]) => {
        expect(processFileName(title)).to.equal(result);
      });
    });
  });

  describe('component', () => {
    it('should render', () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink href={testCase.href} title="foo" />,
      );
      expect(wrapper.props().href).to.equal(testCase.href);
      expect(wrapper.text().trim()).to.equal(`Download foo PDF`);
      wrapper.unmount();
    });
    Object.keys(testData).forEach(ext => {
      it(`should render ${ext.toUpperCase()} link`, () => {
        const testCase = testData[ext];
        const wrapper = shallow(
          <DownloadLink
            href={testCase.href}
            title={testCase.title}
            size={testCase.size}
          />,
        );
        const props = wrapper.props();
        expect(props.href).to.equal(testCase.href);
        expect(props.rel).to.be.undefined;
        expect(props.target).to.be.undefined;
        expect(props.download).to.be.true;
        expect(wrapper.text()).to.equal(testCase.result);
        expect(wrapper.find('dfn').text()).to.contain(
          testCase.size.toUpperCase(),
        );
        wrapper.unmount();
      });
    });
    it('should render title for unknown file types', () => {
      const testCase = {
        href: 'https://example.com/file.xyz',
        title: 'Some unknown file type',
      };
      const wrapper = shallow(<DownloadLink {...testCase} />);
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(props.download).to.be.true;
      expect(props.rel).to.equal('noopener noreferrer');
      expect(props.target).to.equal('_blank');
      expect(props.type).to.equal('application/unknown');
      // icon is still rendered
      expect(wrapper.find('i').length).to.equal(1);
      expect(wrapper.text().trim()).to.equal(`Download ${testCase.title} XYZ`);
      wrapper.unmount();
    });
    it('should render with download blob & unknown file type', () => {
      const blob = new Blob(['{ "test": "foo" }'], {
        type: 'application/json',
      });
      const testCase = {
        href: URL.createObjectURL(blob),
        title: 'read-me',
        type: 'application/octet-stream',
        download: 'test.json',
      };
      const wrapper = shallow(<DownloadLink {...testCase} />);
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(props.download).to.equal(testCase.download);
      expect(props.rel).to.be.undefined; // not external
      expect(props.target).to.be.undefined;
      expect(props.type).to.equal('application/octet-stream');
      // icon is still rendered
      expect(wrapper.find('i').length).to.equal(1);
      expect(wrapper.text().trim()).to.equal(`Download ${testCase.title}`);
      wrapper.unmount();
    });
    it('should render a custom download name', () => {
      const testCase = testData.pdf;
      const newFileName = 'food-bar.pdf';
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          download={newFileName}
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(props.download).to.equal(newFileName);
      wrapper.unmount();
    });
    it('should render a custom type', () => {
      const testCase = testData.pdf;
      const type = 'application/foo';
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          type={type}
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(props.type).to.equal(type);
      wrapper.unmount();
    });
    it('should render a custom icon from className', () => {
      const testCase = testData.pdf;
      const icon = 'fax fa-custom';
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          icon={icon}
        />,
      );
      expect(wrapper.props().href).to.equal(testCase.href);
      expect(wrapper.find('i').props().className).to.equal(
        `vads-u-padding-right--1 ${icon}`,
      );
      wrapper.unmount();
    });
    it('should render a custom icon from JSX', () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          icon={<svg role="img" aria-hidden="true" />}
        />,
      );
      expect(wrapper.props().href).to.equal(testCase.href);
      expect(wrapper.find('i').length).to.equal(0);
      expect(wrapper.find('svg').length).to.equal(1);
      wrapper.unmount();
    });
    it('should render an external link', () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink href={testCase.href} title={testCase.title} external />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(props.rel).to.equal('noopener noreferrer');
      expect(props.target).to.equal('_blank');
      wrapper.unmount();
    });
    it('should render extra properties', () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          data-test="extra data attribute"
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(props['data-test']).to.equal('extra data attribute');
      wrapper.unmount();
    });
    it(`should render custom content`, () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={
            <span>
              {testCase.title} and some <em>extra</em> stuff
            </span>
          }
          size={testCase.size}
          content={({ props }) => <>My custom content for {props.title}, etc</>}
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(wrapper.find('i').length).to.equal(1);
      expect(wrapper.text()).to.equal(
        `My custom content for ${testCase.title} and some extra stuff, etc`,
      );
      expect(wrapper.find('dfn').length).to.equal(0);
      wrapper.unmount();
    });
    it(`should render an custom icon & content`, () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          size={testCase.size}
          icon={<i className="fa fas-cog" />}
          content={() => (
            <>
              Download all the things! <strong>do it now</strong>
            </>
          )}
        />,
      );
      const props = wrapper.props();
      const icon = wrapper.find('i');
      expect(props.href).to.equal(testCase.href);
      expect(icon.length).to.equal(1);
      expect(icon.props().className).to.equal('fa fas-cog');
      expect(wrapper.text()).to.equal(`Download all the things! do it now`);
      expect(wrapper.find('dfn').length).to.equal(0);
      wrapper.unmount();
    });

    // Test errors
    it('should throw an error if no href is passed', () => {
      expect(() => {
        // Not necessary if not componentWillUnmount
        // eslint-disable-next-line va-enzyme/unmount
        shallow(<DownloadLink title="some title" />);
      }).to.throw('Download links require an href property');
    });
    it('should throw an error if no title is passed', () => {
      expect(() => {
        // Not necessary if not componentWillUnmount
        // eslint-disable-next-line va-enzyme/unmount
        shallow(<DownloadLink href="https://example.com/foo.pdf" />);
      }).to.throw(
        'Download links require a title property or custom content function',
      );
    });
    it('should not throw an error if no title is passed, but has a content function', () => {
      const wrapper = shallow(
        <DownloadLink
          href="https://example.com/foo.pdf"
          content={() => 'Foo something something... bar'}
        />,
      );
      expect(wrapper).to.exist;
      wrapper.unmount();
    });
  });
});
