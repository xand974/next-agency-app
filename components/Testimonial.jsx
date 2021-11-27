import React from "react";
import Shape from "./Shape";
import Image from "next/image";
import YoutubeImg from "../public/Images/Youtube.png";
export default function Testimonial() {
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden mb-40">
      <div className="flex-1 relative">
        <h1 className="font-extrabold uppercase text-4xl text-center mt-20">
          testimonials
        </h1>
        <Shape top="-50%" left="37%" backgroundColor="purple" />
      </div>
      <div className="flex-1 flex items-center mx-5">
        <div className="flex-1 w-full h-full mx-5 flex flex-col p-2">
          <div className="mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 14222 14222"
            >
              <circle cx="7111" cy="7112" r="7111" fill="#1977f3" />
              <path
                d="M9879 9168l315-2056H8222V5778c0-562 275-1111 1159-1111h897V2917s-814-139-1592-139c-1624 0-2686 984-2686 2767v1567H4194v2056h1806v4969c362 57 733 86 1111 86s749-30 1111-86V9168z"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="mb-5">
            <h3 className="text-2xl text-gray-500">Facebook</h3>
          </div>
          <div className="mb-5">
            <p>
              <q className="italic text-gray-700 font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                veniam inventore ut. Pariatur, sit aspernatur. Libero dolorem
                ipsum laborum sint delectus repellendus alias voluptatem
                voluptates placeat officia.
              </q>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="https://images.unsplash.com/photo-1637386695817-0b76cacd4a69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              width="50"
              height="50"
              className="rounded-full object-cover"
            />
            <p className="ml-5 font-light">Sonia</p>
          </div>
        </div>
        <div className="flex-1 w-full h-full mx-5 flex flex-col p-2">
          <div className="mb-5">
            <svg
              viewBox="0 0 24 24"
              width="50"
              height="50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
          </div>
          <div className="mb-5">
            <h3 className="text-2xl text-gray-500">Google</h3>
          </div>
          <div className="mb-5">
            <p>
              <q className="italic text-gray-700 font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                veniam inventore ut. Pariatur, sit aspernatur. Libero dolorem
                ipsum laborum sint delectus repellendus alias voluptatem
                voluptates placeat officia.
              </q>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="https://images.unsplash.com/photo-1637386695240-958bc3871a54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              width="50"
              height="50"
              className="rounded-full object-cover"
            />
            <p className="ml-5 font-light">Sonia</p>
          </div>
        </div>
        <div className="flex-1 w-full h-full mx-5 flex flex-col p-2">
          <div className="mb-5">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1920px-YouTube_full-color_icon_%282017%29.svg.png"
              alt=""
              width="50"
              height="50"
              className="object-cover"
            />
          </div>
          <div className="mb-5">
            <h3 className="text-2xl text-gray-500">YouTube</h3>
          </div>
          <div className="mb-5">
            <p>
              <q className="italic text-gray-700 font-light">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
                veniam inventore ut. Pariatur, sit aspernatur. Libero dolorem
                ipsum laborum sint delectus repellendus alias voluptatem
                voluptates placeat officia.
              </q>
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src="https://images.unsplash.com/photo-1637386694450-70e88f7ddbbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt=""
              width="50"
              height="50"
              className="rounded-full"
            />
            <p className="ml-5 font-light">Sonia</p>
          </div>
        </div>
      </div>
    </div>
  );
}
