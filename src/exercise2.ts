type  PartialWithExceptions<T,K extends keyof T>=Pick<T,K> & Partial<Omit<T,K>>

interface Config {
  host: string;
  port: number;
  timeout: number;
}

// host is required, port & timeout optional
type PartialConfig = PartialWithExceptions<Config, 'host'>;

const host1:PartialConfig={
    host:'Localhost'
}
