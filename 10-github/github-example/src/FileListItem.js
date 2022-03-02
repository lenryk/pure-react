import React from 'react';
import PropTypes from 'prop-types';
import CommitMessage from './CommitMessage'
import Time from './Time'
import FileName from './FileName'
import FileIcon from './FileIcon'

function FileListItem({file}) {
    return (
      <tr className="file-list-item">
      <td className="file-icon"><FileIcon file={file}/></td>
        <td className="file-name"><FileName file={file} /></td>
        <td className="commit-message"><CommitMessage commit={file.latestCommit} /></td>
        <td className="age"><Time time={file.updated_at} /></td>
      </tr>
    )
  }
  
FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileListItem;
