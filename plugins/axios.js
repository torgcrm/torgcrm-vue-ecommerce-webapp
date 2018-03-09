export default ({req, $axios}) => {
  const headers = (req && req.headers) ? Object.assign({}, req.headers) : {};
  const hostHeader = headers['x-forwarded-host'];
  $axios.setHeader("Project-Host", hostHeader);
}
