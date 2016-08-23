import React, {PropTypes} from 'react'

const Post = ({title, date, summary, url}) => {
  console.log(summary)
  return (
    <div>
      <h2>{title}</h2><br/>
      {date}<br/>
      {summary}...<br/>
      <a href={url}>{url}</a><br/>
    </div>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
