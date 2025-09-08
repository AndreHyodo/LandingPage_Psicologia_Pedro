const repoName = "LandingPage_Psicologia_Pedro";

export function publicUrl(path: string) {
  if (process.env.NODE_ENV === 'production') {
    return `/${repoName}${path}`;
  }
  return path;
}