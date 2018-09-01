declare module "*.vue" {
  import {Vue} from "../definitelytyped/vue";
  export default vue;
}

import { Vue } from "./vue";

export default Vue;

export {
  CreateElement,
  VueConstructor
} from "./vue";

export {
  Component,
  AsyncComponent,
  ComponentOptions,
  FunctionalComponentOptions,
  RenderContext,
  PropOptions,
  ComputedOptions,
  WatchHandler,
  WatchOptions,
  WatchOptionsWithHandler,
  DirectiveFunction,
  DirectiveOptions
} from "./options";

export {
  PluginFunction,
  PluginObject
} from "./plugin";

export {
  VNodeChildren,
  VNodeChildrenArrayContents,
  VNode,
  VNodeComponentOptions,
  VNodeData,
  VNodeDirective
} from "./vnode";
