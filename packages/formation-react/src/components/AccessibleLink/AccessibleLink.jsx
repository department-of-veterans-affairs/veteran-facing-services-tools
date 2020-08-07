import Telephone, { CONTACTS, PATTERNS } from '../Telephone/Telephone';
import MediaLink, { MEDIA_SITES } from '../MediaLink/MediaLink';
import DownloadLink, {
  FILE_TYPES,
  FILE_SIZES,
} from '../DownloadLink/DownloadLink';

const AccessibleLink = props => props;

AccessibleLink.Telephone = Telephone;
AccessibleLink.Download = DownloadLink;
AccessibleLink.Media = MediaLink;

export { CONTACTS, PATTERNS, MEDIA_SITES, FILE_TYPES, FILE_SIZES };
export default AccessibleLink;
