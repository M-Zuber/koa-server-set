import Feed from './feed.model'

export async function createFeed(ctx) {
  const feed = new Feed(ctx.request.body.feed)
  try {
    await feed.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }

  ctx.body = {
    feed
  }
}

export async function getFeeds(ctx) {
  const feeds = await Feed.find()
  ctx.body = { feeds }
}

export async function updateFeed(ctx) {
  const feed = ctx.body.feed

  Object.assign(feed, ctx.request.body.feed)

  await feed.save()

  ctx.body = {
    feed
  }
}

export async function deleteFeed(ctx) {
  const feed = ctx.body.feed

  await feed.remove()

  ctx.status = 200
  ctx.body = {
    success: true
  }
}