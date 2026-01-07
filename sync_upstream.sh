#!/bin/bash

# Configuration
UPSTREAM_REMOTE="upstream"
ORIGIN_REMOTE="origin"
MAIN_BRANCH="main"

echo "🔄 Syncing with upstream..."

# 1. Fetch the latest changes from upstream
echo "⬇️  Fetching from upstream..."
git fetch $UPSTREAM_REMOTE

# 2. Update local main/master if needed (optional, but good practice)
# git checkout $MAIN_BRANCH
# git merge $UPSTREAM_REMOTE/$MAIN_BRANCH
# git checkout -

# 3. Merge upstream changes into your current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "🔀 Merging upstream/$MAIN_BRANCH into $CURRENT_BRANCH..."
git merge $UPSTREAM_REMOTE/$MAIN_BRANCH

# 4. Push changes to your origin
echo "⬆️  Pushing updated $CURRENT_BRANCH to $ORIGIN_REMOTE..."
git push $ORIGIN_REMOTE $CURRENT_BRANCH

echo "✅ Sync complete! Your branch '$CURRENT_BRANCH' is up to date."
