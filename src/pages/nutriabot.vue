<template>
  <div class="min-h-screen bg-gray-50 py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <h1 class="text-4xl font-bold text-primary mb-2">NutriaBot/2.0</h1>
        <p class="text-lg text-gray-500 mb-8">Web Crawler &amp; Content Fetcher</p>

        <div class="prose prose-lg max-w-none">

          <!-- What is NutriaBot -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">What is NutriaBot?</h2>
            <p class="mb-4">
              NutriaBot is the web content fetcher used by
              <router-link to="/" class="text-primary hover:underline">Nutria AI</router-link>,
              a conversational assistant for e-commerce. It retrieves publicly available web pages
              so the assistant can answer questions about products, ingredients, and related topics.
            </p>
            <p>
              NutriaBot identifies itself with the following User-Agent string:
            </p>
            <div class="bg-gray-100 rounded-lg p-4 my-4 font-mono text-sm break-all">
              Mozilla/5.0 (compatible; NutriaBot/2.0; +https://ainutria.com)
            </div>
          </section>

          <!-- Behaviour -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">Crawler behaviour</h2>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">1.</span>
                <div>
                  <h3 class="font-semibold mb-1">On-demand only</h3>
                  <p class="text-gray-600">
                    NutriaBot does <strong>not</strong> crawl the web proactively or maintain a
                    search index. It only fetches a page when a user or an internal agent explicitly
                    requests it.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">2.</span>
                <div>
                  <h3 class="font-semibold mb-1">Single-page fetches</h3>
                  <p class="text-gray-600">
                    Each request fetches exactly one URL. NutriaBot does not follow links, discover
                    sitemaps, or spider across a site.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">3.</span>
                <div>
                  <h3 class="font-semibold mb-1">Rate limited</h3>
                  <p class="text-gray-600">
                    Requests are capped at <strong>5 per minute</strong> across all sessions.
                    In practice, traffic is far lower.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">4.</span>
                <div>
                  <h3 class="font-semibold mb-1">Respects HTTP status codes</h3>
                  <p class="text-gray-600">
                    If your server returns a 403 or 429, the fetch is treated as failed and no retry
                    is attempted for that request.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">5.</span>
                <div>
                  <h3 class="font-semibold mb-1">30-second timeout</h3>
                  <p class="text-gray-600">
                    Connections time out after 30 seconds. Maximum response size is 2 MB.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">6.</span>
                <div>
                  <h3 class="font-semibold mb-1">Domain allowlist</h3>
                  <p class="text-gray-600">
                    Under normal operation, NutriaBot can only access domains that have been
                    pre-approved by the system administrator. Unknown domains are blocked before
                    any HTTP request is made.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <span class="text-primary font-bold text-xl mt-0.5">7.</span>
                <div>
                  <h3 class="font-semibold mb-1">SSRF protection</h3>
                  <p class="text-gray-600">
                    Requests to private/localhost IP ranges (127.x, 10.x, 192.168.x, 172.16-31.x,
                    ::1) are blocked.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <!-- How to block -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">How to block NutriaBot</h2>
            <p class="mb-4">
              NutriaBot respects standard HTTP signals. To block it, use any of these methods:
            </p>

            <div class="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 class="font-semibold mb-2">robots.txt</h3>
              <pre class="bg-gray-100 rounded p-3 text-sm font-mono overflow-x-auto">User-agent: NutriaBot
Disallow: /</pre>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg mb-4">
              <h3 class="font-semibold mb-2">HTTP 403 / 429</h3>
              <p class="text-gray-600">
                Return a 403 Forbidden or 429 Too Many Requests status. NutriaBot will not retry.
              </p>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-semibold mb-2">User-Agent blocking</h3>
              <p class="text-gray-600">
                Block requests containing <code class="bg-gray-200 px-1 rounded">NutriaBot</code>
                in the User-Agent header using your web server or WAF configuration.
              </p>
            </div>
          </section>

          <!-- Data usage -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">How fetched data is used</h2>
            <p class="mb-4">
              In the Nutria ecosystem, AI agents operate as team members within a company.
              Once a domain is approved by a human supervisor, agents can browse it the same way
              any employee would -- researching products, comparing prices, analysing competitors,
              or gathering information to support business decisions.
            </p>

            <h3 class="text-xl font-semibold mb-3">Domain approval process</h3>
            <p class="mb-4">
              New domains go through a two-step process before agents can access them freely:
            </p>
            <ol class="list-decimal pl-6 space-y-2 mb-6">
              <li>
                <strong>Sandboxed evaluation:</strong> A specialised agent fetches the site in
                an isolated environment and produces a structured report (site type, data formats,
                accessibility).
              </li>
              <li>
                <strong>Human review:</strong> A supervisor reviews the report and decides whether
                to add the domain to the allowlist. No domain is approved automatically.
              </li>
            </ol>

            <h3 class="text-xl font-semibold mb-3">After approval</h3>
            <ul class="list-disc pl-6 space-y-3 mb-6">
              <li>
                <strong>Browsing like a team member:</strong> Agents with internet tools can
                navigate approved domains as needed -- reading product pages, checking stock,
                reviewing blog posts, or analysing site structure. This is equivalent to any
                company employee visiting a public website.
              </li>
              <li>
                <strong>Business tasks:</strong> Fetched content may be used for product research,
                market analysis, customer support, or internal reporting, just as a human team
                member would use publicly available information.
              </li>
            </ul>

            <h3 class="text-xl font-semibold mb-3">What we do NOT do</h3>
            <ul class="list-disc pl-6 space-y-3">
              <li>
                <strong>No mass scraping:</strong> NutriaBot fetches individual pages on demand.
                It does not crawl entire sites, build mirrors, or harvest data in bulk.
              </li>
              <li>
                <strong>No search indexing:</strong> Fetched content is not indexed or made
                searchable by third parties.
              </li>
              <li>
                <strong>No AI training:</strong> Fetched content is never used to train or
                fine-tune AI models.
              </li>
              <li>
                <strong>No redistribution:</strong> Page content is not shared with external
                services or third parties.
              </li>
            </ul>
          </section>

          <!-- Technical details -->
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-primary mb-4">Technical details</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <tbody>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">User-Agent</td>
                    <td class="py-3 font-mono text-sm">Mozilla/5.0 (compatible; NutriaBot/2.0; +https://ainutria.com)</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">HTTP methods</td>
                    <td class="py-3">GET only</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">Rate limit</td>
                    <td class="py-3">5 requests/minute (global)</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">Timeout</td>
                    <td class="py-3">30 seconds</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">Max response</td>
                    <td class="py-3">2 MB</td>
                  </tr>
                  <tr class="border-b border-gray-200">
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">Redirects</td>
                    <td class="py-3">Follows up to 5 redirects</td>
                  </tr>
                  <tr>
                    <td class="py-3 pr-4 font-semibold text-gray-700 whitespace-nowrap">Protocols</td>
                    <td class="py-3">HTTP and HTTPS only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- Contact -->
          <section class="mb-4">
            <h2 class="text-2xl font-bold text-primary mb-4">Contact</h2>
            <p>
              If you have questions about NutriaBot or need to report an issue, contact us at
              <a href="mailto:info@ainutria.com" class="text-primary hover:underline">info@ainutria.com</a>.
            </p>
          </section>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NutriaBot'
}
</script>
