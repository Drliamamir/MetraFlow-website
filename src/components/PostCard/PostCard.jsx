import React from 'react';
import './postcardStyle.scss'

const Posts = ({ posts }) => {
  var maxLength = 256

  function textfixer(postTitle){
    for (let i = 0; i < 0;) {
      (postTitle).substring(0, 32)+<br />
    }
  }

  return (
      <div className='postWarpper'>
        {posts.map(post => {  return (
        <a key={post.id} href={'/post/' + post.id}>
        <section className='postCard' style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${post.url})`, backgroundSize: '100% 100%'}}>
          <div>
            <h1 className='postCardTitle'>
            {
              (post.title).length >= 32 ?
              (post.title).substring(0, 32)+'...'
              :
              post.title
            }
            </h1>
            
            <p className='postCardBody'>
            {
              (post.title).length >= maxLength ?
              (post.title).substring(0, maxLength)+'...'
              :
              post.title
            }
            </p>
          </div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 19l-1 1l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 0 1 8.003 5.996M14 16h6m-3-3v6"/></svg>
          </button>
        </section>
        </a>
        )})}
      </div>
  )
}

export default Posts;