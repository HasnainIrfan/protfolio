import React from "react";
import { BlogBuilder } from "./BlogBuilder";
import bloglist from "../../editable-stuff/blog";
const Blog = (props) => {
  return (
    <div className="container-lg mt-5 bg-blue">
      <h1 className="text-center">Blogs</h1>
      {bloglist.map((value, index) => {
        return (
          <BlogCard
            key={index}
            title={value.title}
            description={value.description}
            index={index}
            urlLink={value.url}
          />
        );
      })}
    </div>
  );
};

const BlogCard = ({ index, title, image, description,urlLink }) => {
  console.log("🚀 ~ file: Blog.jsx:25 ~ BlogCard ~ urlLink", urlLink)
  return (
    <div className="m-5">
      <div className="">
        <div className="row">
          <div className="col-4 col-lg-12">
          </div>
          <div className="col-8 col-lg-12">
            <div className="">
              <h1 className="">{title}</h1>
              <p className="lead">{description}</p>
               <a href={urlLink}  target="_blank" rel="noreferrer" >
                Read more...{" "}
              </a>  
            </div>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export { Blog, BlogBuilder };
