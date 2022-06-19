export const exampletiktokdata = {
  topmetrics: {
    minutesWatched: {
      firstmonth: 400,
      secondmonth: 1500,
    },
    videosWatched: {
      firstmonth: 1000,
      secondmonth: 1700,
    },
    videosWatchedList: {
      daysList: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
      daysData: [
        10, 20, 30, 40, 30, 20, 10, 20, 30, 40, 10, 20, 30, 40, 30, 20, 10, 20,
        30, 40, 10, 20, 30, 40, 30, 20, 10, 20, 30, 40,
      ],
    },
    videosWatchedPerWeek: {
      weeknames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      weeksdata: [20, 50, 5, 10, 30, 15, 17],
    },
  },
  topauthors: [
    {
      name: "Author 1",
      link: "https://tiktok.com",
      avatar: "http://placehold.jp/150x150.png",
      watched_videos: 11,
    },
    {
      name: "Author 2",
      link: "https://tiktok.com",
      avatar: "http://placehold.jp/150x150.png",
      watched_videos: 10,
    },
    {
      name: "Author 3",
      link: "https://tiktok.com",
      avatar: "http://placehold.jp/150x150.png",
      watched_videos: 9,
    },
    {
      name: "Author 4",
      link: "https://tiktok.com",
      avatar: "http://placehold.jp/150x150.png",
      watched_videos: 5,
    },
    {
      name: "Author 5",
      link: "https://tiktok.com",
      avatar: "http://placehold.jp/150x150.png",
      watched_videos: 4,
    },
  ],
};

export async function getTikdata(dateOne: string, dateTwo: string) {
  const response = await fetch(
    `http://localhost:8888/testdata/fdate=${dateOne}&sdate=${dateTwo}`
  );
  const main_dictionary = await response.json();

  return main_dictionary;
}
