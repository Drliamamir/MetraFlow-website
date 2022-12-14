interface ImportMetaEnv {
    readonly DB_PASSWORD: string;
    readonly PUBLIC_SITE_API: string;
    // more env variables...
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv;
}