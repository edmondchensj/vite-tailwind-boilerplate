import { lazyLoad } from "../../components/loadable";

export const TailwindDemoPage = lazyLoad(
  () => import("./index"),
  (module) => module.default
);
