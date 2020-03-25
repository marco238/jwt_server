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
    "date": new Date(2020, 02, 02, 12, 00, 00, 00),
  },
  {
    "id": "2",
    "name": "Code Experience",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 03, 04, 12, 30, 00, 00),
  },
  {
    "id": "3",
    "name": "Art Tour",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 05, 02, 12, 00, 00, 00),
  },
  {
    "id": "4",
    "name": "JS Day",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 07, 02, 12, 25, 00, 00),
  },
  {
    "id": "5",
    "name": "History Meeting",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 10, 02, 13, 55, 00, 00),
  },
  {
    "id": "6",
    "name": "Tech Conf",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 11, 02, 20, 00, 00, 00),
  }
];

const specials = [
  {
    "id": "7",
    "name": "Special Auto Expo",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 11, 15, 12, 30, 00, 00),
  },
  {
    "id": "8",
    "name": "Special Code Experience",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 11, 20, 15, 00, 00, 00),
  },
  {
    "id": "9",
    "name": "Special Art Tour",
    "description": "Lorem fistrum no puedor ese que llega me cago en tus muelas ese hombree diodenoo a gramenawer te voy a borrar el cerito va usté muy cargadoo.",
    "date": new Date(2020, 11, 30, 10, 00, 00, 00),
  }
]