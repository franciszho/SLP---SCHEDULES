[build]
  publish = "public"
  functions = "netlify/functions"

[functions]
  node_bundler = "esbuild"

[[redirects]]
  from = "/api/schedule"
  to = "/.netlify/functions/schedule"
  status = 200
