import AuthFunction from '../functions/auth';
import DownloadFunctions from '../functions/project';
module.exports = {
    ...AuthFunction,
    ...DownloadFunctions
}
