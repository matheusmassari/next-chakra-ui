export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}


export const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Digitized analyzing help-desk",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    location: "953 Armistice Plaza",
    image: "https://picsum.photos/200",
    date: "2021-06-08T06:20:39Z",
    isFeatured: false,
  },
  {
    id: 2,
    title: "Open-source incremental archive",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    location: "996 Fisk Trail",
    image: "https://picsum.photos/200",
    date: "2021-12-19T02:33:50Z",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Profit-focused non-volatile ability",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    location: "9970 Monterey Hill",
    image: "https://picsum.photos/200",
    date: "2021-05-07T13:55:41Z",
    isFeatured: true,
  },
  {
    id: 4,
    title: "Stand-alone encompassing local area network",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    location: "80 Crowley Circle",
    image: "https://picsum.photos/200",
    date: "2022-01-08T16:11:13Z",
    isFeatured: false,
  },
  {
    id: 5,
    title: "Synergistic content-based moderator",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    location: "7723 Pankratz Parkway",
    image: "https://picsum.photos/200",
    date: "2021-08-04T14:12:11Z",
    isFeatured: false,
  },
  {
    id: 6,
    title: "Front-line multi-state hardware",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    location: "1956 Scofield Circle",
    image: "https://picsum.photos/200",
    date: "2021-07-18T13:50:25Z",
    isFeatured: true,
  },
  {
    id: 7,
    title: "Switchable explicit hardware",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    location: "57 Susan Trail",
    image: "https://picsum.photos/200",
    date: "2021-04-29T02:34:57Z",
    isFeatured: true,
  },
  {
    id: 8,
    title: "Managed high-level data-warehouse",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    location: "8 Veith Pass",
    image: "https://picsum.photos/200",
    date: "2021-10-19T12:49:57Z",
    isFeatured: false,
  },
  {
    id: 9,
    title: "Visionary hybrid methodology",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    location: "93385 Harbort Street",
    image: "https://picsum.photos/200",
    date: "2021-04-23T02:34:54Z",
    isFeatured: false,
  },
  {
    id: 10,
    title: "Organic static attitude",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    location: "6833 Novick Pass",
    image: "https://picsum.photos/200",
    date: "2021-04-28T09:18:02Z",
    isFeatured: true,
  },
  {
    id: 11,
    title: "Customer-focused bifurcated infrastructure",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    location: "2 Merchant Court",
    image: "https://picsum.photos/200",
    date: "2021-07-12T08:14:57Z",
    isFeatured: false,
  },
  {
    id: 12,
    title: "Multi-tiered 3rd generation portal",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    location: "61 Ridgeway Point",
    image: "https://picsum.photos/200",
    date: "2021-08-12T11:06:29Z",
    isFeatured: false,
  },
  {
    id: 13,
    title: "Mandatory analyzing paradigm",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    location: "568 Glacier Hill Way",
    image: "https://picsum.photos/200",
    date: "2021-09-08T21:36:07Z",
    isFeatured: true,
  },
  {
    id: 14,
    title: "Down-sized human-resource migration",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    location: "64483 Shasta Circle",
    image: "https://picsum.photos/200",
    date: "2021-07-14T18:25:03Z",
    isFeatured: false,
  },
  {
    id: 15,
    title: "Right-sized holistic software",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    location: "3165 Petterle Center",
    image: "https://picsum.photos/200",
    date: "2022-02-14T10:50:45Z",
    isFeatured: true,
  },
  {
    id: 16,
    title: "Decentralized zero administration website",
    description:
      "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    location: "1316 Calypso Way",
    image: "https://picsum.photos/200",
    date: "2021-06-16T03:14:44Z",
    isFeatured: true,
  },
  {
    id: 17,
    title: "Customizable value-added archive",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    location: "88 Bartillon Terrace",
    image: "https://picsum.photos/200",
    date: "2021-07-05T04:04:41Z",
    isFeatured: true,
  },
  {
    id: 18,
    title: "User-centric heuristic orchestration",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    location: "196 Sunnyside Terrace",
    image: "https://picsum.photos/200",
    date: "2021-11-05T19:44:18Z",
    isFeatured: true,
  },
  {
    id: 19,
    title: "Mandatory incremental hardware",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    location: "7976 Shelley Circle",
    image: "https://picsum.photos/200",
    date: "2021-03-21T14:26:35Z",
    isFeatured: false,
  },
  {
    id: 20,
    title: "Ergonomic radical infrastructure",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    location: "854 Derek Lane",
    image: "https://picsum.photos/200",
    date: "2021-10-31T14:06:47Z",
    isFeatured: true,
  },
  {
    id: 21,
    title: "Phased user-facing knowledge user",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    location: "34337 Main Hill",
    image: "https://picsum.photos/200",
    date: "2021-09-08T11:00:47Z",
    isFeatured: false,
  },
  {
    id: 22,
    title: "Polarised maximized service-desk",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    location: "3 East Parkway",
    image: "https://picsum.photos/200",
    date: "2021-02-26T04:37:02Z",
    isFeatured: false,
  },
  {
    id: 23,
    title: "Function-based non-volatile toolset",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    location: "946 Continental Terrace",
    image: "https://picsum.photos/200",
    date: "2022-02-09T12:31:47Z",
    isFeatured: false,
  },
  {
    id: 24,
    title: "Customizable global paradigm",
    description: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    location: "057 Gina Way",
    image: "https://picsum.photos/200",
    date: "2021-07-09T22:57:26Z",
    isFeatured: true,
  },
  {
    id: 25,
    title: "Up-sized 5th generation interface",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    location: "127 Judy Place",
    image: "https://picsum.photos/200",
    date: "2021-07-14T16:08:42Z",
    isFeatured: true,
  },
  {
    id: 26,
    title: "Up-sized systemic matrix",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    location: "7 Canary Way",
    image: "https://picsum.photos/200",
    date: "2021-11-02T17:27:15Z",
    isFeatured: false,
  },
  {
    id: 27,
    title: "De-engineered zero defect array",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    location: "43 Lillian Crossing",
    image: "https://picsum.photos/200",
    date: "2021-05-24T09:19:35Z",
    isFeatured: true,
  },
  {
    id: 28,
    title: "Vision-oriented regional local area network",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    location: "1 Amoth Court",
    image: "https://picsum.photos/200",
    date: "2021-05-31T18:45:42Z",
    isFeatured: false,
  },
  {
    id: 29,
    title: "Robust 4th generation customer loyalty",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    location: "004 Schlimgen Drive",
    image: "https://picsum.photos/200",
    date: "2021-08-17T17:50:32Z",
    isFeatured: false,
  },
  {
    id: 30,
    title: "Cloned global projection",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    location: "1163 Maple Court",
    image: "https://picsum.photos/200",
    date: "2021-02-28T03:54:53Z",
    isFeatured: false,
  },
  {
    id: 31,
    title: "Assimilated context-sensitive knowledge user",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    location: "684 Bunting Court",
    image: "https://picsum.photos/200",
    date: "2021-09-26T15:57:47Z",
    isFeatured: false,
  },
  {
    id: 32,
    title: "Vision-oriented optimal matrix",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    location: "8335 Harbort Way",
    image: "https://picsum.photos/200",
    date: "2021-08-22T20:15:20Z",
    isFeatured: true,
  },
  {
    id: 33,
    title: "Distributed regional leverage",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    location: "78584 Hoffman Drive",
    image: "https://picsum.photos/200",
    date: "2022-02-19T12:35:56Z",
    isFeatured: false,
  },
  {
    id: 34,
    title: "Down-sized foreground circuit",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    location: "18 Mariners Cove Plaza",
    image: "https://picsum.photos/200",
    date: "2021-08-12T05:18:50Z",
    isFeatured: false,
  },
  {
    id: 35,
    title: "Secured maximized matrices",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    location: "69 Corry Parkway",
    image: "https://picsum.photos/200",
    date: "2022-02-23T11:23:53Z",
    isFeatured: true,
  },
  {
    id: 36,
    title: "Triple-buffered national moderator",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    location: "31 Cherokee Circle",
    image: "https://picsum.photos/200",
    date: "2021-09-20T17:18:37Z",
    isFeatured: true,
  },
  {
    id: 37,
    title: "Face to face dynamic system engine",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    location: "72921 Merrick Terrace",
    image: "https://picsum.photos/200",
    date: "2021-04-10T17:58:09Z",
    isFeatured: true,
  },
  {
    id: 38,
    title: "Fully-configurable non-volatile data-warehouse",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    location: "6 Johnson Court",
    image: "https://picsum.photos/200",
    date: "2021-08-10T04:26:21Z",
    isFeatured: true,
  },
  {
    id: 39,
    title: "Adaptive background concept",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    location: "4368 Colorado Way",
    image: "https://picsum.photos/200",
    date: "2021-08-18T07:06:44Z",
    isFeatured: true,
  },
  {
    id: 40,
    title: "Intuitive methodical analyzer",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    location: "0952 Jenifer Park",
    image: "https://picsum.photos/200",
    date: "2021-06-02T09:38:54Z",
    isFeatured: true,
  },
  {
    id: 41,
    title: "Innovative regional policy",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    location: "88781 Melvin Park",
    image: "https://picsum.photos/200",
    date: "2021-12-11T18:24:53Z",
    isFeatured: true,
  },
  {
    id: 42,
    title: "Cloned even-keeled instruction set",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    location: "706 Becker Street",
    image: "https://picsum.photos/200",
    date: "2021-04-08T14:08:05Z",
    isFeatured: false,
  },
  {
    id: 43,
    title: "Enterprise-wide user-facing contingency",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    location: "1246 North Place",
    image: "https://picsum.photos/200",
    date: "2021-09-06T15:40:52Z",
    isFeatured: false,
  },
  {
    id: 44,
    title: "Quality-focused heuristic frame",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    location: "75 Grayhawk Road",
    image: "https://picsum.photos/200",
    date: "2022-01-24T16:46:41Z",
    isFeatured: true,
  },
  {
    id: 45,
    title: "Optional human-resource benchmark",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    location: "32 Gateway Court",
    image: "https://picsum.photos/200",
    date: "2021-11-08T21:40:09Z",
    isFeatured: false,
  },
  {
    id: 46,
    title: "Focused modular hub",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    location: "9796 Corscot Circle",
    image: "https://picsum.photos/200",
    date: "2022-02-21T11:33:53Z",
    isFeatured: true,
  },
  {
    id: 47,
    title: "Profit-focused bifurcated application",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    location: "97004 Melby Point",
    image: "https://picsum.photos/200",
    date: "2021-03-29T05:04:42Z",
    isFeatured: false,
  },
  {
    id: 48,
    title: "Reactive impactful process improvement",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    location: "9588 Barnett Park",
    image: "https://picsum.photos/200",
    date: "2021-06-19T06:14:30Z",
    isFeatured: false,
  },
  {
    id: 49,
    title: "Networked national secured line",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    location: "2338 Grayhawk Center",
    image: "https://picsum.photos/200",
    date: "2022-02-11T17:48:44Z",
    isFeatured: false,
  },
  {
    id: 50,
    title: "Profound optimal archive",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    location: "05231 Lien Center",
    image: "https://picsum.photos/200",
    date: "2021-07-20T08:10:11Z",
    isFeatured: true,
  },
  {
    id: 51,
    title: "Implemented object-oriented parallelism",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    location: "4640 Park Meadow Road",
    image: "https://picsum.photos/200",
    date: "2021-05-30T20:55:42Z",
    isFeatured: false,
  },
  {
    id: 52,
    title: "Focused asymmetric core",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    location: "0332 Golden Leaf Way",
    image: "https://picsum.photos/200",
    date: "2021-09-30T09:42:23Z",
    isFeatured: true,
  },
  {
    id: 53,
    title: "Enterprise-wide motivating framework",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    location: "0171 Johnson Plaza",
    image: "https://picsum.photos/200",
    date: "2021-10-07T01:15:52Z",
    isFeatured: false,
  },
  {
    id: 54,
    title: "Front-line heuristic pricing structure",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    location: "90190 Buhler Crossing",
    image: "https://picsum.photos/200",
    date: "2021-04-06T12:56:03Z",
    isFeatured: false,
  },
  {
    id: 55,
    title: "Re-engineered optimizing strategy",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    location: "9 Eastwood Pass",
    image: "https://picsum.photos/200",
    date: "2022-01-08T20:28:58Z",
    isFeatured: true,
  },
  {
    id: 56,
    title: "User-friendly cohesive functionalities",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    location: "1 Clemons Alley",
    image: "https://picsum.photos/200",
    date: "2021-03-28T21:35:22Z",
    isFeatured: false,
  },
  {
    id: 57,
    title: "Stand-alone static capacity",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    location: "5 Stang Park",
    image: "https://picsum.photos/200",
    date: "2021-04-06T09:30:26Z",
    isFeatured: false,
  },
  {
    id: 58,
    title: "Synergized explicit flexibility",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    location: "35999 Esch Crossing",
    image: "https://picsum.photos/200",
    date: "2021-06-15T07:03:48Z",
    isFeatured: true,
  },
  {
    id: 59,
    title: "Quality-focused next generation contingency",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    location: "45 Fisk Point",
    image: "https://picsum.photos/200",
    date: "2021-05-08T04:46:00Z",
    isFeatured: false,
  },
  {
    id: 60,
    title: "Upgradable secondary flexibility",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    location: "3906 Oakridge Place",
    image: "https://picsum.photos/200",
    date: "2021-08-25T19:35:22Z",
    isFeatured: false,
  },
  {
    id: 61,
    title: "Enterprise-wide secondary instruction set",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    location: "07496 Northridge Park",
    image: "https://picsum.photos/200",
    date: "2021-05-18T17:40:52Z",
    isFeatured: true,
  },
  {
    id: 62,
    title: "Triple-buffered neutral artificial intelligence",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    location: "5 Loftsgordon Drive",
    image: "https://picsum.photos/200",
    date: "2021-02-25T13:02:01Z",
    isFeatured: true,
  },
  {
    id: 63,
    title: "Persevering zero administration projection",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    location: "97152 Dixon Point",
    image: "https://picsum.photos/200",
    date: "2021-03-21T05:46:21Z",
    isFeatured: false,
  },
  {
    id: 64,
    title: "Exclusive non-volatile structure",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    location: "65 Burrows Street",
    image: "https://picsum.photos/200",
    date: "2021-08-30T16:13:38Z",
    isFeatured: true,
  },
  {
    id: 65,
    title: "Seamless clear-thinking policy",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    location: "27 Little Fleur Way",
    image: "https://picsum.photos/200",
    date: "2021-03-04T13:00:41Z",
    isFeatured: true,
  },
  {
    id: 66,
    title: "Expanded non-volatile challenge",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    location: "77165 Manitowish Pass",
    image: "https://picsum.photos/200",
    date: "2021-05-22T22:46:38Z",
    isFeatured: false,
  },
  {
    id: 67,
    title: "Fundamental responsive leverage",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    location: "7 Hintze Court",
    image: "https://picsum.photos/200",
    date: "2021-03-27T13:18:08Z",
    isFeatured: true,
  },
  {
    id: 68,
    title: "Adaptive transitional budgetary management",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    location: "3 Starling Lane",
    image: "https://picsum.photos/200",
    date: "2021-12-23T19:28:35Z",
    isFeatured: false,
  },
  {
    id: 69,
    title: "Customizable foreground budgetary management",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    location: "5905 Gateway Drive",
    image: "https://picsum.photos/200",
    date: "2021-10-28T20:26:58Z",
    isFeatured: false,
  },
  {
    id: 70,
    title: "Managed bottom-line protocol",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    location: "3942 Myrtle Crossing",
    image: "https://picsum.photos/200",
    date: "2021-10-28T09:04:13Z",
    isFeatured: true,
  },
  {
    id: 71,
    title: "Integrated homogeneous capability",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    location: "66408 Sutteridge Court",
    image: "https://picsum.photos/200",
    date: "2022-02-15T04:15:25Z",
    isFeatured: true,
  },
  {
    id: 72,
    title: "Upgradable user-facing task-force",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    location: "822 Hanson Alley",
    image: "https://picsum.photos/200",
    date: "2021-11-17T16:06:01Z",
    isFeatured: false,
  },
  {
    id: 73,
    title: "Secured dynamic matrix",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    location: "33 Red Cloud Court",
    image: "https://picsum.photos/200",
    date: "2021-07-15T02:56:00Z",
    isFeatured: true,
  },
  {
    id: 74,
    title: "Open-source object-oriented intranet",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    location: "07431 Clyde Gallagher Trail",
    image: "https://picsum.photos/200",
    date: "2021-11-14T22:38:24Z",
    isFeatured: false,
  },
  {
    id: 75,
    title: "Enterprise-wide hybrid complexity",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    location: "495 Fisk Drive",
    image: "https://picsum.photos/200",
    date: "2021-06-29T03:17:59Z",
    isFeatured: true,
  },
];