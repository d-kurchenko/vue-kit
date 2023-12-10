import 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title: string;
    layout?: string;
    autoId?: boolean;
    public?: boolean;
    private?: boolean;
  }
}
