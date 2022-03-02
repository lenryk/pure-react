import React from 'react';
import PropTypes from 'prop-types';

function FileIcon({file}) {
    let icon = file.type === "folder" ? "fa-folder" : "fa-file-text-o";
  
    return (
        <i className={`fa ${icon}`} />
    )
  }
  
FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileIcon;
