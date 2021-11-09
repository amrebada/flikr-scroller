export const FLICKR_KEY = "f359bf05de04068c7318479b5475d38e";
export const FLICKR_BASE_URL = "https://www.flickr.com/services/rest/";

export const flickrMethods = {
  search: "flickr.photos.search",
};

export const flickrOptions = {
  safe_search: {
    safe: 1,
    moderate: 2,
    restricted: 3,
  },
  content_type: {
    photos_only: 1,
    screenshots_only: 2,
    other_only: 3,
    photos_and_screenshots: 4,
    screenshots_and_other: 5,
    photos_and_other: 6,
    all: 7,
  },
  privacy_filter: {
    public_photos: 1,
    private_photos_visible_to_friends: 2,
    private_photos_visible_to_family: 3,
    private_photos_visible_to_friends_and_family: 4,
    completely_private_photos: 5,
  },
  geo_context: {
    not_defined: 0,
    indoors: 1,
    outdoors: 2,
  },
};

export const flickrConfig = {
  search: {
    method: flickrMethods.search,
    per_page: 20,
    format: "json",
    nojsoncallback: 1,
    safe_search: flickrOptions.safe_search.safe,
    content_type: flickrOptions.content_type.all,
    privacy_filter: flickrOptions.privacy_filter.public_photos,
    geo_context: flickrOptions.geo_context.not_defined,
    tags: 'space'
  },
};
