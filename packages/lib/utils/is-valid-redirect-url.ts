const ALLOWED_PROTOCOLS = ['http', 'https'];

export const isValidRedirectUrl = (value: string) => {
  try {
    const url = new URL(value);

    console.log({ protocol: url.protocol });
    if (!ALLOWED_PROTOCOLS.includes(url.protocol.slice(0, -1).toLowerCase())) {
      return false;
    }

    return true;
  } catch {
    return false;
  }
};
