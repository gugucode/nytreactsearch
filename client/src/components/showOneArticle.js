import React from "react";
export const ShowOneArticle = (props => {
    const article = props.article;

    const data = {
        title: article.headline.print_headline || article.headline.main,
        url: article.web_url,
        date: (article.pub_date).slice(0,10),
        articleId: article._id
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" >
            <div className="row">
                <div className="col-12 col-md-9">
                    <a href={data.url} target="_blank">{data.title} </a>
                </div>
                <div className="col-5 col-md-2">
                    <span>{data.date}</span>
                </div>
                <div className="col-4 col-md-1">
                    <button type="button" className="btn btn-info btn-sm" id={article._id} onClick={() => props.saveArticle(data,article._id)}>Save</button>
                    <button type="button" className="btn btn-success btn-sm" id={`saved_${article._id}`} style={{visibility:"hidden"}}>Saved</button>
                </div>
            </div>
        </li>
    )
})