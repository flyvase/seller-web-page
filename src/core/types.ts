// Use this type if you want to remove some properties from predefined prop types.
// ex. remove variant property from TypographyProps on Material UI
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type HttpMethods = 'GET' | 'POST';
