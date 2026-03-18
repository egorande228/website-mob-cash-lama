# SEO Network Tracker Notes

## Purpose

Use `SEO_NETWORK_TRACKER.csv` to manage a country-domain SEO network.

## Key Columns

- `priority_tier`: rollout priority
- `brand`: `1xbet`, `melbet`, or another brand
- `target_country`: country for this domain
- `target_language`: primary site language
- `main_query`: main branded search query to target
- `domain`: purchased or planned domain
- `status`: `planned`, `bought`, `deployed`, `indexed`, `ranking`
- `registrar`: where the domain was bought
- `purchase_date`: domain purchase date
- `renewal_date`: renewal date
- `template_type`: site/template variation used
- `site_type`: `hub`, `country`, `faq`, `commission`, etc.
- `gsc_property`: Search Console property name or URL
- `ga4_property`: GA4 property used for this site
- `sitemap_url`: sitemap location
- `robots_url`: robots.txt location
- `index_status`: `not submitted`, `submitted`, `indexed`, `partial`, `error`
- `main_page_url`: main indexed landing page
- `top_keyword_position`: current approximate rank for main query
- `secondary_queries`: extra queries worth tracking
- `content_status`: `draft`, `ready`, `live`, `needs rewrite`
- `meta_status`: whether title/description/canonical are done
- `schema_status`: whether structured data is done
- `internal_links_status`: whether internal linking is done
- `backlinks_status`: backlink status
- `last_update`: last meaningful SEO/content update
- `next_action`: next concrete task
- `notes`: anything useful that does not fit the other columns

## Recommended Status Flow

1. `planned`
2. `bought`
3. `deployed`
4. `submitted`
5. `indexed`
6. `ranking`

## Recommended First Use

1. duplicate one row per GEO
2. fill `brand`, `target_country`, `target_language`, and `domain`
3. track domain purchase and launch dates
4. track indexing separately from rankings
5. update `next_action` every time you touch the GEO
