export const dataBumps = [
    {
      "id": "Serie 1",
      "data": [
        {
          "x": "2000",
          "y": 4
        },
        {
          "x": "2001",
          "y": 7
        },
        {
          "x": "2002",
          "y": 9
        },
        {
          "x": "2003",
          "y": 4
        },
        {
          "x": "2004",
          "y": 2
        }
      ]
    },
    {
      "id": "Serie 2",
      "data": [
        {
          "x": "2000",
          "y": 5
        },
        {
          "x": "2001",
          "y": 8
        },
        {
          "x": "2002",
          "y": 12
        },
        {
          "x": "2003",
          "y": 8
        },
        {
          "x": "2004",
          "y": 5
        }
      ]
    },
    {
      "id": "Serie 3",
      "data": [
        {
          "x": "2000",
          "y": 12
        },
        {
          "x": "2001",
          "y": 5
        },
        {
          "x": "2002",
          "y": 10
        },
        {
          "x": "2003",
          "y": 9
        },
        {
          "x": "2004",
          "y": 3
        }
      ]
    },
    {
      "id": "Serie 4",
      "data": [
        {
          "x": "2000",
          "y": 2
        },
        {
          "x": "2001",
          "y": 12
        },
        {
          "x": "2002",
          "y": 1
        },
        {
          "x": "2003",
          "y": 7
        },
        {
          "x": "2004",
          "y": 11
        }
      ]
    },
    {
      "id": "Serie 5",
      "data": [
        {
          "x": "2000",
          "y": 1
        },
        {
          "x": "2001",
          "y": 1
        },
        {
          "x": "2002",
          "y": 3
        },
        {
          "x": "2003",
          "y": 10
        },
        {
          "x": "2004",
          "y": 4
        }
      ]
    },
    {
      "id": "Serie 6",
      "data": [
        {
          "x": "2000",
          "y": 10
        },
        {
          "x": "2001",
          "y": 10
        },
        {
          "x": "2002",
          "y": 2
        },
        {
          "x": "2003",
          "y": 2
        },
        {
          "x": "2004",
          "y": 6
        }
      ]
    },
    {
      "id": "Serie 7",
      "data": [
        {
          "x": "2000",
          "y": 9
        },
        {
          "x": "2001",
          "y": 11
        },
        {
          "x": "2002",
          "y": 11
        },
        {
          "x": "2003",
          "y": 12
        },
        {
          "x": "2004",
          "y": 8
        }
      ]
    },
    {
      "id": "Serie 8",
      "data": [
        {
          "x": "2000",
          "y": 8
        },
        {
          "x": "2001",
          "y": 6
        },
        {
          "x": "2002",
          "y": 8
        },
        {
          "x": "2003",
          "y": 11
        },
        {
          "x": "2004",
          "y": 1
        }
      ]
    },
    {
      "id": "Serie 9",
      "data": [
        {
          "x": "2000",
          "y": 7
        },
        {
          "x": "2001",
          "y": 9
        },
        {
          "x": "2002",
          "y": 4
        },
        {
          "x": "2003",
          "y": 3
        },
        {
          "x": "2004",
          "y": 12
        }
      ]
    },
    {
      "id": "Serie 10",
      "data": [
        {
          "x": "2000",
          "y": 3
        },
        {
          "x": "2001",
          "y": 4
        },
        {
          "x": "2002",
          "y": 5
        },
        {
          "x": "2003",
          "y": 1
        },
        {
          "x": "2004",
          "y": 10
        }
      ]
    },
    {
      "id": "Serie 11",
      "data": [
        {
          "x": "2000",
          "y": 11
        },
        {
          "x": "2001",
          "y": 2
        },
        {
          "x": "2002",
          "y": 6
        },
        {
          "x": "2003",
          "y": 6
        },
        {
          "x": "2004",
          "y": 9
        }
      ]
    },
    {
      "id": "Serie 12",
      "data": [
        {
          "x": "2000",
          "y": 6
        },
        {
          "x": "2001",
          "y": 3
        },
        {
          "x": "2002",
          "y": 7
        },
        {
          "x": "2003",
          "y": 5
        },
        {
          "x": "2004",
          "y": 7
        }
      ]
    }
    ]
function getRandomInt(min:any, max:any) {
  // Generate a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomDataForYear(numEntries:any, year:string) {
  const data = [];
  const startDate = new Date(`${year}-01-01`);
  const endDate = new Date(`${year}-12-31`);

  for (let i = 0; i < numEntries; i++) {
    const randomValue = getRandomInt(1, 500); // Example random value between 1 and 500
    const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
    const formattedDate = randomDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

    const item = {
      'value': randomValue,
      'day': formattedDate
    };

    data.push(item);
  }
  
  return data;
}

export const dataChart = [
  {
    "id": "japan",
    "color": "hsl(73, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 86
      },
      {
        "x": "helicopter",
        "y": 230
      },
      {
        "x": "boat",
        "y": 254
      },
      {
        "x": "train",
        "y": 261
      },
      {
        "x": "subway",
        "y": 131
      },
      {
        "x": "bus",
        "y": 182
      },
      {
        "x": "car",
        "y": 297
      },
      {
        "x": "moto",
        "y": 60
      },
      {
        "x": "bicycle",
        "y": 124
      },
      {
        "x": "horse",
        "y": 183
      },
      {
        "x": "skateboard",
        "y": 33
      },
      {
        "x": "others",
        "y": 14
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(202, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 24
      },
      {
        "x": "helicopter",
        "y": 69
      },
      {
        "x": "boat",
        "y": 283
      },
      {
        "x": "train",
        "y": 27
      },
      {
        "x": "subway",
        "y": 148
      },
      {
        "x": "bus",
        "y": 76
      },
      {
        "x": "car",
        "y": 167
      },
      {
        "x": "moto",
        "y": 189
      },
      {
        "x": "bicycle",
        "y": 142
      },
      {
        "x": "horse",
        "y": 120
      },
      {
        "x": "skateboard",
        "y": 136
      },
      {
        "x": "others",
        "y": 2
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(238, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 53
      },
      {
        "x": "helicopter",
        "y": 247
      },
      {
        "x": "boat",
        "y": 48
      },
      {
        "x": "train",
        "y": 284
      },
      {
        "x": "subway",
        "y": 265
      },
      {
        "x": "bus",
        "y": 150
      },
      {
        "x": "car",
        "y": 177
      },
      {
        "x": "moto",
        "y": 221
      },
      {
        "x": "bicycle",
        "y": 47
      },
      {
        "x": "horse",
        "y": 288
      },
      {
        "x": "skateboard",
        "y": 89
      },
      {
        "x": "others",
        "y": 207
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(341, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 27
      },
      {
        "x": "helicopter",
        "y": 77
      },
      {
        "x": "boat",
        "y": 195
      },
      {
        "x": "train",
        "y": 229
      },
      {
        "x": "subway",
        "y": 71
      },
      {
        "x": "bus",
        "y": 284
      },
      {
        "x": "car",
        "y": 120
      },
      {
        "x": "moto",
        "y": 21
      },
      {
        "x": "bicycle",
        "y": 245
      },
      {
        "x": "horse",
        "y": 84
      },
      {
        "x": "skateboard",
        "y": 195
      },
      {
        "x": "others",
        "y": 5
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(22, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 86
      },
      {
        "x": "helicopter",
        "y": 256
      },
      {
        "x": "boat",
        "y": 247
      },
      {
        "x": "train",
        "y": 40
      },
      {
        "x": "subway",
        "y": 295
      },
      {
        "x": "bus",
        "y": 82
      },
      {
        "x": "car",
        "y": 175
      },
      {
        "x": "moto",
        "y": 162
      },
      {
        "x": "bicycle",
        "y": 39
      },
      {
        "x": "horse",
        "y": 131
      },
      {
        "x": "skateboard",
        "y": 151
      },
      {
        "x": "others",
        "y": 244
      }
    ]
  }
]