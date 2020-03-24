module.exports.fetchEvents = (req, res) => {
  res.status(200).json(events);
}

module.exports.fetchSpecials = (req, res) => {
  res.status(200).json(specials);
}

const events = [
  {
    "id": "1",
    "name": "Auto Expo",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-04-23T18:30:00:511Z",
  },
  {
    "id": "2",
    "name": "Code Experience",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-05-03T18:30:00:511Z",
  },
  {
    "id": "3",
    "name": "Art Tour",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-06-02T18:30:00:511Z",
  },
  {
    "id": "4",
    "name": "JS Day",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-08-31T18:30:00:511Z",
  },
  {
    "id": "5",
    "name": "History Meeting",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-10-01T18:30:00:511Z",
  },
  {
    "id": "6",
    "name": "Tech Conf",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-12-30T18:30:00:511Z",
  }
];

const specials = [
  {
    "id": "7",
    "name": "Special Auto Expo",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-04-23T18:30:00:511Z",
  },
  {
    "id": "8",
    "name": "Special Code Experience",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-05-03T18:30:00:511Z",
  },
  {
    "id": "9",
    "name": "Special Art Tour",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": "2020-06-02T18:30:00:511Z",
  }
]