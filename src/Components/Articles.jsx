import React from "react";
import { titleSlicer } from "../utils/helper";
import Carousel from "./Carousel";

const Articles = ({ sections, title }) => {
  if (sections.length < 2) {
    return (
      <>
        {sections[0].type === 11 ? (
          <div className="w-full mb-4">
            <Carousel autoplay={true} show={1}>
              {sections[0].articles.map((item, i) => {
                return (
                  <a
                    href={item.url.url}
                    className="place-content-center"
                    key={i}
                  >
                    <img
                      className="w-full h-96 bg-contain bg-center z-0"
                      src={
                        "https://obs.line-scdn.net/" +
                        item.thumbnail.hash +
                        "/w1200"
                      }
                    />
                    <div className="center w-full h-18 bg-gray-100 mx-16 transform -translate-y-16 p-2">
                      <p className="font-medium text-2xl">
                        {titleSlicer(item.title)}
                      </p>
                    </div>
                  </a>
                );
              })}
            </Carousel>
          </div>
        ) : (
          <>
            {sections[0].type === 6 && sections[0].articles.length > 2 ? (
              <div className="w-full mb-4">
                <Carousel show={2} duo>
                  {sections[0].articles.map((item, i) => {
                    return (
                      <a href={item.url.url} className="w-full px-1" key={i}>
                        <img
                          className="w-full h-40 bg-contain bg-center"
                          src={
                            "https://obs.line-scdn.net/" +
                            item.thumbnail.hash +
                            "/w1200"
                          }
                        />
                        <div className="w- h-18 bg-gray-100 mx-1 transform -translate-y-16 p-2">
                          <p className="font-small text-thin">
                            {titleSlicer(item.title)}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </Carousel>
              </div>
            ) : (
              <div
                style={
                  sections[0].articles.length === 0 ? { display: "none" } : {}
                }
                className="w-full"
              >
                <section className="bg-white m-4 p-2 rounded">
                  <h1 className="text-3xl font-semibold text-gray-800 p-6">
                    {title === undefined || title === ""
                      ? "Artikel Lainnya"
                      : title}
                  </h1>
                  <div className="grid grid-flow-row grid-cols-2 gap-3 m-4">
                    {sections[0].articles.map((item, i) => {
                      return (
                        <a
                          href={item.url.url}
                          className="articles-item"
                          key={i}
                        >
                          <img
                            className="w-full h-60 rounded"
                            src={
                              "https://obs.line-scdn.net/" +
                              item.thumbnail.hash +
                              "/w580"
                            }
                          />
                          <p className="text-xl font-medium text-black">
                            {titleSlicer(item.title)}
                          </p>
                          <p className="text-normal text-gray-400">
                            {item.publisher}
                          </p>
                        </a>
                      );
                    })}
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </>
    );
  }
  return (
    <>
      {sections[0].articles.length >= 2 ? (
        <div className="w-full mb-4">
          <Carousel autoplay={true} show={1}>
            {sections[0].articles.map((item, i) => {
              return (
                <a href={item.url.url} className="place-content-center" key={i}>
                  <img
                    className="w-full h-96 bg-contain bg-center z-0"
                    src={
                      "https://obs.line-scdn.net/" +
                      item.thumbnail.hash +
                      "/w1200"
                    }
                  />
                  <div className="center w-full h-18 bg-gray-100 mx-16 transform -translate-y-16 p-2">
                    <p className="font-medium text-2xl">
                      {titleSlicer(item.title)}
                    </p>
                  </div>
                </a>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div
          style={sections[0].articles.length === 0 ? { display: "none" } : {}}
          className="w-full"
        >
          <section className="bg-white p-4 rounded">
            <div className="grid grid-flow-row grid-cols-2 gap-3">
              {sections[0].articles.map((item, i) => {
                return (
                  <div className="articles-item-wrapper">
                    <a href={item.url.url} className="articles-item" key={i}>
                      <img
                        className="w-36 h-20 rounded-lg"
                        src={
                          "https://obs.line-scdn.net/" +
                          item.thumbnail.hash +
                          "/w580"
                        }
                      />
                      <div className="flex-grow">
                        <p className="text-l font-semibold text-black">
                          {titleSlicer(item.title)}
                        </p>
                        <p className="text-normal text-gray-400">
                          {item.publisher}
                        </p>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      )}
      <div
        style={sections[1].articles.length === 0 ? { display: "none" } : {}}
        className="w-ful mt-12"
      >
        <section className="w-full">
          <div className="flex flex-wrap">
            {sections[1].articles.map((item, i) => {
              return (
                <div className="w-full">
                  <a
                    href={item.url.url}
                    className="h-full flex items-center p-4 rounded-lg"
                    key={i}
                  >
                    <img
                      className="w-36 h-16 bg-gray-100 bg-contain bg-cover flex-shrink-0 mr-4 rounded"
                      src={
                        "https://obs.line-scdn.net/" +
                        item.thumbnail.hash +
                        "/w580"
                      }
                    />
                    <div className="flex-grow">
                      <p className="text-xl font-semibold text-black">
                        {titleSlicer(item.title)}
                      </p>
                      <p className="text-normal text-gray-400">
                        {item.publisher}
                      </p>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default Articles;
