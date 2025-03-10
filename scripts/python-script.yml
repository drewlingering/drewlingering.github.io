import datetime
import os

# Directory to save blog posts
post_dir = "_posts"

# Generate current date and time
now = datetime.datetime.now()
date_str = now.strftime("%Y-%m-%d")
title = f"{date_str}-daily-update.md"
timestamp = now.strftime("%Y-%m-%d %H:%M:%S")

# Social media embed links
facebook_embed = "<iframe src='https://www.facebook.com/plugins/post.php?href=YOUR_FACEBOOK_POST_URL'></iframe>"
linkedin_embed = "<iframe src='https://www.linkedin.com/embed/feed/update/urn:li:YOUR_LINKEDIN_POST'></iframe>"
twitter_embed = "<blockquote class='twitter-tweet'><a href='https://twitter.com/YOUR_TWEET'></a></blockquote>"
bluesky_embed = "<iframe src='https://blueskyweb.com/YOUR_POST'></iframe>"

# Create post content
content = f"""---
layout: post
title: "Daily Update for {date_str}"
date: {timestamp}
---

### Today's Highlights
Here are today's highlights from various social media platforms:

#### Facebook
{facebook_embed}

#### LinkedIn
{linkedin_embed}

#### Twitter
{twitter_embed}

#### Bluesky
{bluesky_embed}
"""

# Save to file
os.makedirs(post_dir, exist_ok=True)
post_path = os.path.join(post_dir, title)
with open(post_path, "w") as file:
    file.write(content)

print(f"Created blog post: {post_path}")
