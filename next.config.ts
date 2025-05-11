import type { NextConfig } from "next";
// import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  // webpack: (config: Configuration, { isServer }) => {
  //   if (!isServer && config.resolve) {
  //     config.resolve.fallback = {
  //       ...config.resolve.fallback,
  //       fs: false,
  //       module: false,
  //       path: false,
  //       os: false,
  //     };
  //   }
  //
  //   config.module?.rules?.push(
  //     {
  //       test: /\.(glb|gltf)$/,
  //       use: {
  //         loader: "file-loader",
  //         options: {
  //           outputPath: "static/models/",
  //           publicPath: "/_next/static/models/",
  //           name: "[name].[hash].[ext]",
  //         },
  //       },
  //     },
  //     {
  //       test: /\.(bin)$/,
  //       use: {
  //         loader: "file-loader",
  //         options: {
  //           name: "[name].[ext]",
  //         },
  //       },
  //     },
  //     {
  //       test: /\.(glsl|frag|vert)$/,
  //       type: "asset/source",
  //     },
  //   );
  //
  //   return config;
  // },
};

export default nextConfig;
