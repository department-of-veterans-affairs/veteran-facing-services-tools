import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import DownloadLink, {
  FILE_TYPES,
  getFileExtensionFromUrl,
  getExtGroup,
  getFileSizeData,
  processFileName,
} from './DownloadLink';

const testData = {
  jpg: {
    href: 'https://www.example.com/test.jpg',
    title: 'Test image',
    group: 'graphic',
    type: 'image/jpeg',
    size: '400b',
    sizeData: {
      sizeValue: 400,
      sizeAbbr: 'B',
      sizeName: 'Bytes',
    },
    result: 'Download Test image JPG (400B)',
  },
  pdf: {
    href: 'https://www.foo.bar.com/my.folder/file.pdf?value=3.4',
    title: 'A much needed form',
    group: 'Portable Document Format',
    type: 'application/pdf',
    size: '1.67mb',
    sizeData: {
      sizeValue: 1.67,
      sizeAbbr: 'MB',
      sizeName: 'Megabytes',
    },
    result: 'Download A much needed form PDF (1.67MB)',
  },
  txt: {
    href: 'https://www.test.com/file.txt#anchor-link',
    title: 'Some random text file',
    group: 'text file',
    type: 'text/plain',
    size: '321kb',
    sizeData: {
      sizeValue: 321,
      sizeAbbr: 'KB',
      sizeName: 'Kilobytes',
    },
    result: 'Download Some random text file TXT (321KB)',
  },
  docx: {
    href: 'https://docs.com/mydoc.docx#table-1.1',
    title: 'MS is the best',
    group: 'Word document',
    type:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    size: '.03GB',
    sizeData: {
      sizeValue: 0.03,
      sizeAbbr: 'GB',
      sizeName: 'Gigabytes',
    },
    result: 'Download MS is the best DOCX (0.03GB)',
  },
};

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
    it('should return the correct fle size data', () => {
      Object.keys(testData).forEach(key => {
        expect(getFileSizeData(testData[key].size)).to.deep.equal(
          testData[key].sizeData,
        );
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
      expect(wrapper.text()).to.equal(`Download foo PDF`);
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
      expect(wrapper.text()).to.equal(`Download ${testCase.title} XYZ`);
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
      expect(wrapper.text()).to.equal(`Download ${testCase.title} `);
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
    it(`should render a custom template`, () => {
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
          template="My custom template for {title}, etc"
        />,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(wrapper.find('i').length).to.equal(1);
      expect(wrapper.text()).to.equal(
        `My custom template for ${testCase.title} and some extra stuff, etc`,
      );
      expect(wrapper.find('dfn').length).to.equal(0);
      wrapper.unmount();
    });
    it(`should render a child elements instead of the icon & template`, () => {
      const testCase = testData.pdf;
      const wrapper = shallow(
        <DownloadLink
          href={testCase.href}
          title={testCase.title}
          size={testCase.size}
        >
          <>
            Download all the things! <strong>do it now</strong>
          </>
        </DownloadLink>,
      );
      const props = wrapper.props();
      expect(props.href).to.equal(testCase.href);
      expect(wrapper.find('i').length).to.equal(0);
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
        'Download links require either a title property or child elements',
      );
    });
    it('should not throw an error if no title is passed, but has children', () => {
      const wrapper = shallow(
        <DownloadLink href="https://example.com/foo.pdf">
          Foo something something... bar
        </DownloadLink>,
      );
      expect(wrapper).to.exist;
      wrapper.unmount();
    });
  });
});
