import express from "express";
import cors from "cors";

// Environment
const PORT = process.env.PORT || 3000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "*"; // set to your web app origin in prod

const app = express();

// Middleware
app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

// Health check
app.get("/healthz", (req, res) => res.json({ ok: true }));

// Example in-memory data (replace with DB later)
const reports = [
  {
    "id": "rpt_001",
    "userId": "user_1001",
    "userName": "Sai Gowda",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 13.087907,
    "longitude": 80.278784,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_001_1.jpg",
      "https://example.com/videos/rpt_001_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-15T08:57:38.121590Z",
    "updatedAt": "2025-09-15T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_002",
    "userId": "user_1002",
    "userName": "Aarav Das",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.555629,
    "longitude": 88.359478,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_002_1.jpg",
      "https://example.com/videos/rpt_002_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-09T10:57:38.121590Z",
    "updatedAt": "2025-09-09T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_003",
    "userId": "user_1003",
    "userName": "Sai Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 17.690506,
    "longitude": 83.234756,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_003_1.jpg",
      "https://example.com/videos/rpt_003_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-08T16:57:38.121590Z",
    "updatedAt": "2025-09-08T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_004",
    "userId": "user_1004",
    "userName": "Meera Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 9.912166,
    "longitude": 76.269638,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_004_1.jpg",
      "https://example.com/videos/rpt_004_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-09T15:57:38.121590Z",
    "updatedAt": "2025-09-09T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_005",
    "userId": "user_1005",
    "userName": "Aditya Gupta",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 12.910528,
    "longitude": 74.864925,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_005_1.jpg",
      "https://example.com/videos/rpt_005_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-11T23:57:38.121590Z",
    "updatedAt": "2025-09-12T18:57:38.121590Z",
    "verifiedBy": "official_105",
    "verifiedAt": "2025-09-12T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_006",
    "userId": "user_1006",
    "userName": "Sai Pillai",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.798269,
    "longitude": 85.841257,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_006_1.jpg",
      "https://example.com/videos/rpt_006_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-06T19:57:38.121590Z",
    "updatedAt": "2025-09-07T05:57:38.121590Z",
    "verifiedBy": "official_106",
    "verifiedAt": "2025-09-07T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_007",
    "userId": "user_1007",
    "userName": "Aarohi Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 20.316914,
    "longitude": 86.610217,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_007_1.jpg",
      "https://example.com/videos/rpt_007_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-08T06:57:38.121590Z",
    "updatedAt": "2025-09-08T17:57:38.121590Z",
    "verifiedBy": "official_107",
    "verifiedAt": "2025-09-08T17:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_008",
    "userId": "user_1008",
    "userName": "Aadhya Shetty",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.633517,
    "longitude": 87.513994,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_008_1.jpg",
      "https://example.com/videos/rpt_008_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-12T22:57:38.121590Z",
    "updatedAt": "2025-09-13T13:57:38.121590Z",
    "verifiedBy": "official_108",
    "verifiedAt": "2025-09-13T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_009",
    "userId": "user_1009",
    "userName": "Aadhya Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 11.96209,
    "longitude": 79.791696,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_009_1.jpg",
      "https://example.com/videos/rpt_009_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-18T13:57:38.121590Z",
    "updatedAt": "2025-09-19T08:57:38.121590Z",
    "verifiedBy": "official_109",
    "verifiedAt": "2025-09-19T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_010",
    "userId": "user_1010",
    "userName": "Aarohi Khan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 16.99783,
    "longitude": 82.255181,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_010_1.jpg",
      "https://example.com/videos/rpt_010_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-19T07:57:38.121590Z",
    "updatedAt": "2025-09-19T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_011",
    "userId": "user_1011",
    "userName": "Diya Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 8.761092,
    "longitude": 78.117134,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_011_1.jpg",
      "https://example.com/videos/rpt_011_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-15T17:57:38.121590Z",
    "updatedAt": "2025-09-16T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_012",
    "userId": "user_1012",
    "userName": "Vivaan Menon",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.641692,
    "longitude": 69.614923,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_012_1.jpg",
      "https://example.com/videos/rpt_012_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-10T14:57:38.121590Z",
    "updatedAt": "2025-09-10T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_013",
    "userId": "user_1013",
    "userName": "Saanvi Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 20.890268,
    "longitude": 70.378427,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_013_1.jpg",
      "https://example.com/videos/rpt_013_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-13T18:57:38.121590Z",
    "updatedAt": "2025-09-14T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_014",
    "userId": "user_1014",
    "userName": "Krishna Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.486461,
    "longitude": 69.076345,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_014_1.jpg",
      "https://example.com/videos/rpt_014_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-14T09:57:38.121590Z",
    "updatedAt": "2025-09-14T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_015",
    "userId": "user_1015",
    "userName": "Zara Chauhan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.467512,
    "longitude": 70.046561,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_015_1.jpg",
      "https://example.com/videos/rpt_015_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T17:57:38.121590Z",
    "updatedAt": "2025-09-13T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_016",
    "userId": "user_1016",
    "userName": "Aditya Yadav",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.232576,
    "longitude": 68.970641,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_016_1.jpg",
      "https://example.com/videos/rpt_016_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T06:57:38.121590Z",
    "updatedAt": "2025-09-14T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_017",
    "userId": "user_1017",
    "userName": "Meera Gowda",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 14.818371,
    "longitude": 74.135608,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_017_1.jpg",
      "https://example.com/videos/rpt_017_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T23:57:38.121590Z",
    "updatedAt": "2025-09-14T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_018",
    "userId": "user_1018",
    "userName": "Arjun Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.984698,
    "longitude": 73.305198,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_018_1.jpg",
      "https://example.com/videos/rpt_018_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-06T16:57:38.121590Z",
    "updatedAt": "2025-09-06T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_019",
    "userId": "user_1019",
    "userName": "Diya Khan",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 18.634211,
    "longitude": 72.884708,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_019_1.jpg",
      "https://example.com/videos/rpt_019_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T03:57:38.121590Z",
    "updatedAt": "2025-09-14T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_020",
    "userId": "user_1020",
    "userName": "Vihaan Nair",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 15.390694,
    "longitude": 73.843114,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_020_1.jpg",
      "https://example.com/videos/rpt_020_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-13T02:57:38.121590Z",
    "updatedAt": "2025-09-13T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_021",
    "userId": "user_1021",
    "userName": "Navya Singh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 15.511547,
    "longitude": 73.842049,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_021_1.jpg",
      "https://example.com/videos/rpt_021_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-08T03:57:38.121590Z",
    "updatedAt": "2025-09-08T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_022",
    "userId": "user_1022",
    "userName": "Saanvi Iyer",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.073046,
    "longitude": 88.090064,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_022_1.jpg",
      "https://example.com/videos/rpt_022_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-11T19:57:38.121590Z",
    "updatedAt": "2025-09-12T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_023",
    "userId": "user_1023",
    "userName": "Ishaan Verma",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.184224,
    "longitude": 81.138896,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_023_1.jpg",
      "https://example.com/videos/rpt_023_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-14T09:57:38.121590Z",
    "updatedAt": "2025-09-14T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_024",
    "userId": "user_1024",
    "userName": "Ananya Gowda",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 14.42628,
    "longitude": 79.987731,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_024_1.jpg",
      "https://example.com/videos/rpt_024_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-14T19:57:38.121590Z",
    "updatedAt": "2025-09-15T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_025",
    "userId": "user_1025",
    "userName": "Navya Yadav",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.273877,
    "longitude": 84.884444,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_025_1.jpg",
      "https://example.com/videos/rpt_025_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-11T10:57:38.121590Z",
    "updatedAt": "2025-09-11T19:57:38.121590Z",
    "verifiedBy": "official_125",
    "verifiedAt": "2025-09-11T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_026",
    "userId": "user_1026",
    "userName": "Muhammad Sharma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.826009,
    "longitude": 69.370164,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_026_1.jpg",
      "https://example.com/videos/rpt_026_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-19T05:57:38.121590Z",
    "updatedAt": "2025-09-19T15:57:38.121590Z",
    "verifiedBy": "official_126",
    "verifiedAt": "2025-09-19T15:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_027",
    "userId": "user_1027",
    "userName": "Janhvi Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.77844,
    "longitude": 72.173033,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_027_1.jpg",
      "https://example.com/videos/rpt_027_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-13T10:57:38.121590Z",
    "updatedAt": "2025-09-14T03:57:38.121590Z",
    "verifiedBy": "official_127",
    "verifiedAt": "2025-09-14T03:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_028",
    "userId": "user_1028",
    "userName": "Aadhya Ghosh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 8.077146,
    "longitude": 77.532867,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_028_1.jpg",
      "https://example.com/videos/rpt_028_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-09T03:57:38.121590Z",
    "updatedAt": "2025-09-09T04:57:38.121590Z",
    "verifiedBy": "official_128",
    "verifiedAt": "2025-09-09T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_029",
    "userId": "user_1029",
    "userName": "Reyansh Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.082775,
    "longitude": 72.88509,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_029_1.jpg",
      "https://example.com/videos/rpt_029_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-07T00:57:38.121590Z",
    "updatedAt": "2025-09-07T23:57:38.121590Z",
    "verifiedBy": "official_129",
    "verifiedAt": "2025-09-07T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_030",
    "userId": "user_1030",
    "userName": "Diya Shetty",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 13.094158,
    "longitude": 80.252917,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_030_1.jpg",
      "https://example.com/videos/rpt_030_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-13T17:57:38.121590Z",
    "updatedAt": "2025-09-13T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_031",
    "userId": "user_1031",
    "userName": "Aadhya Iyer",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.565639,
    "longitude": 88.345807,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_031_1.jpg",
      "https://example.com/videos/rpt_031_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-16T21:57:38.121590Z",
    "updatedAt": "2025-09-17T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_032",
    "userId": "user_1032",
    "userName": "Aarohi Shetty",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 17.681222,
    "longitude": 83.237834,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_032_1.jpg",
      "https://example.com/videos/rpt_032_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-19T23:57:38.121590Z",
    "updatedAt": "2025-09-20T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_033",
    "userId": "user_1033",
    "userName": "Vihaan Yadav",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 9.921981,
    "longitude": 76.282099,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_033_1.jpg",
      "https://example.com/videos/rpt_033_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-13T01:57:38.121590Z",
    "updatedAt": "2025-09-13T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_034",
    "userId": "user_1034",
    "userName": "Zara Rao",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 12.936919,
    "longitude": 74.838005,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_034_1.jpg",
      "https://example.com/videos/rpt_034_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-11T11:57:38.121590Z",
    "updatedAt": "2025-09-11T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_035",
    "userId": "user_1035",
    "userName": "Arjun Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.807194,
    "longitude": 85.840543,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_035_1.jpg",
      "https://example.com/videos/rpt_035_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-13T07:57:38.121590Z",
    "updatedAt": "2025-09-13T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_036",
    "userId": "user_1036",
    "userName": "Diya Khan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 20.336172,
    "longitude": 86.617221,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_036_1.jpg",
      "https://example.com/videos/rpt_036_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-17T14:57:38.121590Z",
    "updatedAt": "2025-09-17T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_037",
    "userId": "user_1037",
    "userName": "Vivaan Chowdhury",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.63246,
    "longitude": 87.523403,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_037_1.jpg",
      "https://example.com/videos/rpt_037_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-09T14:57:38.121590Z",
    "updatedAt": "2025-09-10T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_038",
    "userId": "user_1038",
    "userName": "Janhvi Yadav",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 11.949001,
    "longitude": 79.8295,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_038_1.jpg",
      "https://example.com/videos/rpt_038_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-20T10:57:38.121590Z",
    "updatedAt": "2025-09-21T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_039",
    "userId": "user_1039",
    "userName": "Arjun Singh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.995848,
    "longitude": 82.23372,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_039_1.jpg",
      "https://example.com/videos/rpt_039_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-16T05:57:38.121590Z",
    "updatedAt": "2025-09-16T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_040",
    "userId": "user_1040",
    "userName": "Krishna Rao",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 8.754942,
    "longitude": 78.11804,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_040_1.jpg",
      "https://example.com/videos/rpt_040_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-08T07:57:38.121590Z",
    "updatedAt": "2025-09-08T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_041",
    "userId": "user_1041",
    "userName": "Vivaan Chowdhury",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.625584,
    "longitude": 69.649096,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_041_1.jpg",
      "https://example.com/videos/rpt_041_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-18T04:57:38.121590Z",
    "updatedAt": "2025-09-18T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_042",
    "userId": "user_1042",
    "userName": "Aarav Patel",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 20.903627,
    "longitude": 70.383568,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_042_1.jpg",
      "https://example.com/videos/rpt_042_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-16T03:57:38.121590Z",
    "updatedAt": "2025-09-16T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_043",
    "userId": "user_1043",
    "userName": "Diya Gupta",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.446979,
    "longitude": 69.0818,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_043_1.jpg",
      "https://example.com/videos/rpt_043_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-09T02:57:38.121590Z",
    "updatedAt": "2025-09-10T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_044",
    "userId": "user_1044",
    "userName": "Aadhya Patel",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.488267,
    "longitude": 70.076312,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_044_1.jpg",
      "https://example.com/videos/rpt_044_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-16T11:57:38.121590Z",
    "updatedAt": "2025-09-17T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_045",
    "userId": "user_1045",
    "userName": "Ananya Gupta",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.256542,
    "longitude": 68.94762,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_045_1.jpg",
      "https://example.com/videos/rpt_045_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-13T17:57:38.121590Z",
    "updatedAt": "2025-09-14T09:57:38.121590Z",
    "verifiedBy": "official_145",
    "verifiedAt": "2025-09-14T09:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_046",
    "userId": "user_1046",
    "userName": "Vihaan Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 14.828828,
    "longitude": 74.125631,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_046_1.jpg",
      "https://example.com/videos/rpt_046_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-16T18:57:38.121590Z",
    "updatedAt": "2025-09-16T19:57:38.121590Z",
    "verifiedBy": "official_146",
    "verifiedAt": "2025-09-16T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_047",
    "userId": "user_1047",
    "userName": "Diya Reddy",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 16.984714,
    "longitude": 73.323805,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_047_1.jpg",
      "https://example.com/videos/rpt_047_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-12T18:57:38.121590Z",
    "updatedAt": "2025-09-13T14:57:38.121590Z",
    "verifiedBy": "official_147",
    "verifiedAt": "2025-09-13T14:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_048",
    "userId": "user_1048",
    "userName": "Zara Das",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 18.641861,
    "longitude": 72.884118,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_048_1.jpg",
      "https://example.com/videos/rpt_048_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-10T03:57:38.121590Z",
    "updatedAt": "2025-09-10T18:57:38.121590Z",
    "verifiedBy": "official_148",
    "verifiedAt": "2025-09-10T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_049",
    "userId": "user_1049",
    "userName": "Janhvi Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 15.370325,
    "longitude": 73.851734,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_049_1.jpg",
      "https://example.com/videos/rpt_049_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-17T09:57:38.121590Z",
    "updatedAt": "2025-09-17T22:57:38.121590Z",
    "verifiedBy": "official_149",
    "verifiedAt": "2025-09-17T22:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_050",
    "userId": "user_1050",
    "userName": "Diya Gupta",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 15.50441,
    "longitude": 73.823067,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_050_1.jpg",
      "https://example.com/videos/rpt_050_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-11T05:57:38.121590Z",
    "updatedAt": "2025-09-11T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_051",
    "userId": "user_1051",
    "userName": "Navya Ghosh",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.052988,
    "longitude": 88.0514,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_051_1.jpg",
      "https://example.com/videos/rpt_051_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-07T22:57:38.121590Z",
    "updatedAt": "2025-09-07T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_052",
    "userId": "user_1052",
    "userName": "Vivaan Pillai",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 16.174873,
    "longitude": 81.129982,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_052_1.jpg",
      "https://example.com/videos/rpt_052_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-12T21:57:38.121590Z",
    "updatedAt": "2025-09-13T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_053",
    "userId": "user_1053",
    "userName": "Navya Gupta",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 14.447627,
    "longitude": 79.97569,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_053_1.jpg",
      "https://example.com/videos/rpt_053_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-11T04:57:38.121590Z",
    "updatedAt": "2025-09-12T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_054",
    "userId": "user_1054",
    "userName": "Aarohi Verma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.293807,
    "longitude": 84.881339,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_054_1.jpg",
      "https://example.com/videos/rpt_054_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-07T13:57:38.121590Z",
    "updatedAt": "2025-09-08T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_055",
    "userId": "user_1055",
    "userName": "Muhammad Khan",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.823822,
    "longitude": 69.335404,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_055_1.jpg",
      "https://example.com/videos/rpt_055_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-09T08:57:38.121590Z",
    "updatedAt": "2025-09-09T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_056",
    "userId": "user_1056",
    "userName": "Vivaan Menon",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.785882,
    "longitude": 72.168361,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_056_1.jpg",
      "https://example.com/videos/rpt_056_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-12T05:57:38.121590Z",
    "updatedAt": "2025-09-12T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_057",
    "userId": "user_1057",
    "userName": "Navya Patel",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 8.087012,
    "longitude": 77.552323,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_057_1.jpg",
      "https://example.com/videos/rpt_057_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-14T14:57:38.121590Z",
    "updatedAt": "2025-09-15T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_058",
    "userId": "user_1058",
    "userName": "Diya Reddy",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.077742,
    "longitude": 72.899457,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_058_1.jpg",
      "https://example.com/videos/rpt_058_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-15T14:57:38.121590Z",
    "updatedAt": "2025-09-16T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_059",
    "userId": "user_1059",
    "userName": "Zara Singh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 13.094407,
    "longitude": 80.287281,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_059_1.jpg",
      "https://example.com/videos/rpt_059_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-10T02:57:38.121590Z",
    "updatedAt": "2025-09-10T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_060",
    "userId": "user_1060",
    "userName": "Navya Menon",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.56921,
    "longitude": 88.368809,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_060_1.jpg",
      "https://example.com/videos/rpt_060_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-15T12:57:38.121590Z",
    "updatedAt": "2025-09-16T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_061",
    "userId": "user_1061",
    "userName": "Vihaan Pillai",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 17.707197,
    "longitude": 83.224528,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_061_1.jpg",
      "https://example.com/videos/rpt_061_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-15T19:57:38.121590Z",
    "updatedAt": "2025-09-16T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_062",
    "userId": "user_1062",
    "userName": "Ishaan Ghosh",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 9.919919,
    "longitude": 76.248222,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_062_1.jpg",
      "https://example.com/videos/rpt_062_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-08T11:57:38.121590Z",
    "updatedAt": "2025-09-08T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_063",
    "userId": "user_1063",
    "userName": "Ishaan Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 12.916819,
    "longitude": 74.868051,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_063_1.jpg",
      "https://example.com/videos/rpt_063_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-14T23:57:38.121590Z",
    "updatedAt": "2025-09-15T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_064",
    "userId": "user_1064",
    "userName": "Ananya Yadav",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.817562,
    "longitude": 85.855013,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_064_1.jpg",
      "https://example.com/videos/rpt_064_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-07T04:57:38.121590Z",
    "updatedAt": "2025-09-07T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_065",
    "userId": "user_1065",
    "userName": "Navya Reddy",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 20.305098,
    "longitude": 86.616158,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_065_1.jpg",
      "https://example.com/videos/rpt_065_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-18T23:57:38.121590Z",
    "updatedAt": "2025-09-19T11:57:38.121590Z",
    "verifiedBy": "official_115",
    "verifiedAt": "2025-09-19T11:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_066",
    "userId": "user_1066",
    "userName": "Janhvi Nair",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.642837,
    "longitude": 87.488399,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_066_1.jpg",
      "https://example.com/videos/rpt_066_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-14T16:57:38.121590Z",
    "updatedAt": "2025-09-14T22:57:38.121590Z",
    "verifiedBy": "official_116",
    "verifiedAt": "2025-09-14T22:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_067",
    "userId": "user_1067",
    "userName": "Janhvi Nair",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 11.916752,
    "longitude": 79.79588,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_067_1.jpg",
      "https://example.com/videos/rpt_067_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-19T01:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": "official_117",
    "verifiedAt": "2025-09-20T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_068",
    "userId": "user_1068",
    "userName": "Saanvi Menon",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 16.974475,
    "longitude": 82.225247,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_068_1.jpg",
      "https://example.com/videos/rpt_068_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-18T05:57:38.121590Z",
    "updatedAt": "2025-09-18T20:57:38.121590Z",
    "verifiedBy": "official_118",
    "verifiedAt": "2025-09-18T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_069",
    "userId": "user_1069",
    "userName": "Vivaan Chauhan",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 8.775577,
    "longitude": 78.12121,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_069_1.jpg",
      "https://example.com/videos/rpt_069_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-11T03:57:38.121590Z",
    "updatedAt": "2025-09-11T08:57:38.121590Z",
    "verifiedBy": "official_119",
    "verifiedAt": "2025-09-11T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_070",
    "userId": "user_1070",
    "userName": "Zara Rao",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.623256,
    "longitude": 69.618551,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_070_1.jpg",
      "https://example.com/videos/rpt_070_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-09T12:57:38.121590Z",
    "updatedAt": "2025-09-10T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_071",
    "userId": "user_1071",
    "userName": "Aditya Menon",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 20.894738,
    "longitude": 70.352827,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_071_1.jpg",
      "https://example.com/videos/rpt_071_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-13T07:57:38.121590Z",
    "updatedAt": "2025-09-14T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_072",
    "userId": "user_1072",
    "userName": "Kiara Chauhan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.466507,
    "longitude": 69.087443,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_072_1.jpg",
      "https://example.com/videos/rpt_072_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-08T20:57:38.121590Z",
    "updatedAt": "2025-09-09T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_073",
    "userId": "user_1073",
    "userName": "Meera Das",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.461441,
    "longitude": 70.035096,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_073_1.jpg",
      "https://example.com/videos/rpt_073_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-18T03:57:38.121590Z",
    "updatedAt": "2025-09-18T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_074",
    "userId": "user_1074",
    "userName": "Arjun Rao",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.244453,
    "longitude": 68.954005,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_074_1.jpg",
      "https://example.com/videos/rpt_074_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-19T15:57:38.121590Z",
    "updatedAt": "2025-09-19T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_075",
    "userId": "user_1075",
    "userName": "Aarav Chowdhury",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 14.791659,
    "longitude": 74.148551,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_075_1.jpg",
      "https://example.com/videos/rpt_075_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-19T23:57:38.121590Z",
    "updatedAt": "2025-09-20T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_076",
    "userId": "user_1076",
    "userName": "Ishaan Chowdhury",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.004611,
    "longitude": 73.326562,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_076_1.jpg",
      "https://example.com/videos/rpt_076_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-10T23:57:38.121590Z",
    "updatedAt": "2025-09-11T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_077",
    "userId": "user_1077",
    "userName": "Zara Rao",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 18.642809,
    "longitude": 72.883413,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_077_1.jpg",
      "https://example.com/videos/rpt_077_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-08T19:57:38.121590Z",
    "updatedAt": "2025-09-08T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_078",
    "userId": "user_1078",
    "userName": "Aadhya Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 15.407394,
    "longitude": 73.855785,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_078_1.jpg",
      "https://example.com/videos/rpt_078_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-14T11:57:38.121590Z",
    "updatedAt": "2025-09-14T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_079",
    "userId": "user_1079",
    "userName": "Janhvi Chowdhury",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 15.466045,
    "longitude": 73.845313,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_079_1.jpg",
      "https://example.com/videos/rpt_079_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-18T10:57:38.121590Z",
    "updatedAt": "2025-09-18T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_080",
    "userId": "user_1080",
    "userName": "Sai Chauhan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.083058,
    "longitude": 88.072612,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_080_1.jpg",
      "https://example.com/videos/rpt_080_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-12T10:57:38.121590Z",
    "updatedAt": "2025-09-12T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_081",
    "userId": "user_1081",
    "userName": "Saanvi Reddy",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.197754,
    "longitude": 81.121561,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_081_1.jpg",
      "https://example.com/videos/rpt_081_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-20T01:57:38.121590Z",
    "updatedAt": "2025-09-20T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_082",
    "userId": "user_1082",
    "userName": "Krishna Patel",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 14.43078,
    "longitude": 79.977655,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_082_1.jpg",
      "https://example.com/videos/rpt_082_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-16T05:57:38.121590Z",
    "updatedAt": "2025-09-17T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_083",
    "userId": "user_1083",
    "userName": "Aarav Gowda",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.296982,
    "longitude": 84.883192,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_083_1.jpg",
      "https://example.com/videos/rpt_083_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-20T01:57:38.121590Z",
    "updatedAt": "2025-09-20T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_084",
    "userId": "user_1084",
    "userName": "Muhammad Sharma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.809366,
    "longitude": 69.342428,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_084_1.jpg",
      "https://example.com/videos/rpt_084_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-13T19:57:38.121590Z",
    "updatedAt": "2025-09-14T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_085",
    "userId": "user_1085",
    "userName": "Kiara Mukherjee",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.779034,
    "longitude": 72.134791,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_085_1.jpg",
      "https://example.com/videos/rpt_085_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-18T12:57:38.121590Z",
    "updatedAt": "2025-09-19T08:57:38.121590Z",
    "verifiedBy": "official_135",
    "verifiedAt": "2025-09-19T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_086",
    "userId": "user_1086",
    "userName": "Aarohi Ghosh",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 8.086762,
    "longitude": 77.52226,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_086_1.jpg",
      "https://example.com/videos/rpt_086_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-07T03:57:38.121590Z",
    "updatedAt": "2025-09-07T13:57:38.121590Z",
    "verifiedBy": "official_136",
    "verifiedAt": "2025-09-07T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_087",
    "userId": "user_1087",
    "userName": "Janhvi Menon",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.062666,
    "longitude": 72.86211,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_087_1.jpg",
      "https://example.com/videos/rpt_087_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-06T23:57:38.121590Z",
    "updatedAt": "2025-09-07T10:57:38.121590Z",
    "verifiedBy": "official_137",
    "verifiedAt": "2025-09-07T10:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_088",
    "userId": "user_1088",
    "userName": "Krishna Khan",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 13.085844,
    "longitude": 80.271866,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_088_1.jpg",
      "https://example.com/videos/rpt_088_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-17T15:57:38.121590Z",
    "updatedAt": "2025-09-18T09:57:38.121590Z",
    "verifiedBy": "official_138",
    "verifiedAt": "2025-09-18T09:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_089",
    "userId": "user_1089",
    "userName": "Janhvi Shetty",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.572059,
    "longitude": 88.360844,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_089_1.jpg",
      "https://example.com/videos/rpt_089_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-12T10:57:38.121590Z",
    "updatedAt": "2025-09-12T13:57:38.121590Z",
    "verifiedBy": "official_139",
    "verifiedAt": "2025-09-12T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_090",
    "userId": "user_1090",
    "userName": "Navya Menon",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.67985,
    "longitude": 83.210307,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_090_1.jpg",
      "https://example.com/videos/rpt_090_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-09T17:57:38.121590Z",
    "updatedAt": "2025-09-10T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_091",
    "userId": "user_1091",
    "userName": "Reyansh Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 9.906782,
    "longitude": 76.276949,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_091_1.jpg",
      "https://example.com/videos/rpt_091_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-08T13:57:38.121590Z",
    "updatedAt": "2025-09-08T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_092",
    "userId": "user_1092",
    "userName": "Muhammad Shetty",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 12.935157,
    "longitude": 74.862675,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_092_1.jpg",
      "https://example.com/videos/rpt_092_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-08T11:57:38.121590Z",
    "updatedAt": "2025-09-08T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_093",
    "userId": "user_1093",
    "userName": "Aarav Singh",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.837451,
    "longitude": 85.850962,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_093_1.jpg",
      "https://example.com/videos/rpt_093_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-13T05:57:38.121590Z",
    "updatedAt": "2025-09-14T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_094",
    "userId": "user_1094",
    "userName": "Reyansh Das",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 20.304336,
    "longitude": 86.636802,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_094_1.jpg",
      "https://example.com/videos/rpt_094_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-14T14:57:38.121590Z",
    "updatedAt": "2025-09-15T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_095",
    "userId": "user_1095",
    "userName": "Ishaan Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 21.620776,
    "longitude": 87.502826,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_095_1.jpg",
      "https://example.com/videos/rpt_095_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-10T16:57:38.121590Z",
    "updatedAt": "2025-09-10T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_096",
    "userId": "user_1096",
    "userName": "Vihaan Ghosh",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 11.925636,
    "longitude": 79.810351,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_096_1.jpg",
      "https://example.com/videos/rpt_096_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-18T16:57:38.121590Z",
    "updatedAt": "2025-09-18T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_097",
    "userId": "user_1097",
    "userName": "Zara Reddy",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.013254,
    "longitude": 82.263873,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_097_1.jpg",
      "https://example.com/videos/rpt_097_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-07T21:57:38.121590Z",
    "updatedAt": "2025-09-08T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_098",
    "userId": "user_1098",
    "userName": "Reyansh Rao",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 8.76471,
    "longitude": 78.121428,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_098_1.jpg",
      "https://example.com/videos/rpt_098_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-17T21:57:38.121590Z",
    "updatedAt": "2025-09-18T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_099",
    "userId": "user_1099",
    "userName": "Navya Shetty",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.646407,
    "longitude": 69.64933,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_099_1.jpg",
      "https://example.com/videos/rpt_099_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-12T02:57:38.121590Z",
    "updatedAt": "2025-09-12T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_100",
    "userId": "user_1100",
    "userName": "Zara Gowda",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 20.894542,
    "longitude": 70.391932,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_100_1.jpg",
      "https://example.com/videos/rpt_100_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-08T04:57:38.121590Z",
    "updatedAt": "2025-09-09T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_101",
    "userId": "user_1101",
    "userName": "Aditya Rao",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.488593,
    "longitude": 69.091687,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_101_1.jpg",
      "https://example.com/videos/rpt_101_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-10T04:57:38.121590Z",
    "updatedAt": "2025-09-10T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_102",
    "userId": "user_1102",
    "userName": "Kiara Menon",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.476979,
    "longitude": 70.058071,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_102_1.jpg",
      "https://example.com/videos/rpt_102_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-18T13:57:38.121590Z",
    "updatedAt": "2025-09-19T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_103",
    "userId": "user_1103",
    "userName": "Ananya Iyer",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.225693,
    "longitude": 68.943187,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_103_1.jpg",
      "https://example.com/videos/rpt_103_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-15T00:57:38.121590Z",
    "updatedAt": "2025-09-15T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_104",
    "userId": "user_1104",
    "userName": "Janhvi Gupta",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 14.830722,
    "longitude": 74.147066,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_104_1.jpg",
      "https://example.com/videos/rpt_104_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-20T10:57:38.121590Z",
    "updatedAt": "2025-09-20T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_105",
    "userId": "user_1105",
    "userName": "Vihaan Menon",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 16.988476,
    "longitude": 73.306661,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_105_1.jpg",
      "https://example.com/videos/rpt_105_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-07T20:57:38.121590Z",
    "updatedAt": "2025-09-08T17:57:38.121590Z",
    "verifiedBy": "official_105",
    "verifiedAt": "2025-09-08T17:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_106",
    "userId": "user_1106",
    "userName": "Meera Khan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 18.650475,
    "longitude": 72.854315,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_106_1.jpg",
      "https://example.com/videos/rpt_106_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-19T19:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": "official_106",
    "verifiedAt": "2025-09-20T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_107",
    "userId": "user_1107",
    "userName": "Krishna Yadav",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 15.406365,
    "longitude": 73.854461,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_107_1.jpg",
      "https://example.com/videos/rpt_107_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-09T16:57:38.121590Z",
    "updatedAt": "2025-09-10T13:57:38.121590Z",
    "verifiedBy": "official_107",
    "verifiedAt": "2025-09-10T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_108",
    "userId": "user_1108",
    "userName": "Vihaan Menon",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 15.482054,
    "longitude": 73.842158,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_108_1.jpg",
      "https://example.com/videos/rpt_108_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-11T09:57:38.121590Z",
    "updatedAt": "2025-09-12T06:57:38.121590Z",
    "verifiedBy": "official_108",
    "verifiedAt": "2025-09-12T06:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_109",
    "userId": "user_1109",
    "userName": "Diya Ghosh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.089504,
    "longitude": 88.07296,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_109_1.jpg",
      "https://example.com/videos/rpt_109_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-18T08:57:38.121590Z",
    "updatedAt": "2025-09-19T04:57:38.121590Z",
    "verifiedBy": "official_109",
    "verifiedAt": "2025-09-19T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_110",
    "userId": "user_1110",
    "userName": "Navya Das",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 16.186084,
    "longitude": 81.150217,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_110_1.jpg",
      "https://example.com/videos/rpt_110_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-14T04:57:38.121590Z",
    "updatedAt": "2025-09-14T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_111",
    "userId": "user_1111",
    "userName": "Krishna Ghosh",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 14.440543,
    "longitude": 79.995285,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_111_1.jpg",
      "https://example.com/videos/rpt_111_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-16T21:57:38.121590Z",
    "updatedAt": "2025-09-16T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_112",
    "userId": "user_1112",
    "userName": "Ananya Chauhan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.250003,
    "longitude": 84.91087,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_112_1.jpg",
      "https://example.com/videos/rpt_112_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-14T05:57:38.121590Z",
    "updatedAt": "2025-09-14T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_113",
    "userId": "user_1113",
    "userName": "Zara Gupta",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.831441,
    "longitude": 69.338371,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_113_1.jpg",
      "https://example.com/videos/rpt_113_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-17T15:57:38.121590Z",
    "updatedAt": "2025-09-17T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_114",
    "userId": "user_1114",
    "userName": "Zara Nair",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.750019,
    "longitude": 72.161118,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_114_1.jpg",
      "https://example.com/videos/rpt_114_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-17T16:57:38.121590Z",
    "updatedAt": "2025-09-17T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_115",
    "userId": "user_1115",
    "userName": "Sai Iyer",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 8.09629,
    "longitude": 77.538847,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_115_1.jpg",
      "https://example.com/videos/rpt_115_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-18T09:57:38.121590Z",
    "updatedAt": "2025-09-18T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_116",
    "userId": "user_1116",
    "userName": "Ananya Iyer",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.053647,
    "longitude": 72.878392,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_116_1.jpg",
      "https://example.com/videos/rpt_116_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-08T01:57:38.121590Z",
    "updatedAt": "2025-09-08T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_117",
    "userId": "user_1117",
    "userName": "Diya Yadav",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 13.069572,
    "longitude": 80.289752,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_117_1.jpg",
      "https://example.com/videos/rpt_117_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-19T18:57:38.121590Z",
    "updatedAt": "2025-09-20T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_118",
    "userId": "user_1118",
    "userName": "Ananya Chauhan",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.565359,
    "longitude": 88.341763,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_118_1.jpg",
      "https://example.com/videos/rpt_118_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-14T00:57:38.121590Z",
    "updatedAt": "2025-09-14T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_119",
    "userId": "user_1119",
    "userName": "Arjun Singh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 17.670562,
    "longitude": 83.217301,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_119_1.jpg",
      "https://example.com/videos/rpt_119_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-17T13:57:38.121590Z",
    "updatedAt": "2025-09-17T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_120",
    "userId": "user_1120",
    "userName": "Ananya Khan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 9.947574,
    "longitude": 76.272012,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_120_1.jpg",
      "https://example.com/videos/rpt_120_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-10T03:57:38.121590Z",
    "updatedAt": "2025-09-10T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_121",
    "userId": "user_1121",
    "userName": "Reyansh Singh",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 12.901841,
    "longitude": 74.839919,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_121_1.jpg",
      "https://example.com/videos/rpt_121_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-09T08:57:38.121590Z",
    "updatedAt": "2025-09-10T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_122",
    "userId": "user_1122",
    "userName": "Navya Mukherjee",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.817956,
    "longitude": 85.855574,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_122_1.jpg",
      "https://example.com/videos/rpt_122_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-09T23:57:38.121590Z",
    "updatedAt": "2025-09-09T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_123",
    "userId": "user_1123",
    "userName": "Navya Reddy",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 20.337588,
    "longitude": 86.60904,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_123_1.jpg",
      "https://example.com/videos/rpt_123_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-08T15:57:38.121590Z",
    "updatedAt": "2025-09-08T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_124",
    "userId": "user_1124",
    "userName": "Krishna Shetty",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.607398,
    "longitude": 87.497716,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_124_1.jpg",
      "https://example.com/videos/rpt_124_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-20T08:57:38.121590Z",
    "updatedAt": "2025-09-21T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_125",
    "userId": "user_1125",
    "userName": "Arjun Yadav",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 11.942966,
    "longitude": 79.811272,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_125_1.jpg",
      "https://example.com/videos/rpt_125_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-06T23:57:38.121590Z",
    "updatedAt": "2025-09-07T02:57:38.121590Z",
    "verifiedBy": "official_125",
    "verifiedAt": "2025-09-07T02:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_126",
    "userId": "user_1126",
    "userName": "Vihaan Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 16.969261,
    "longitude": 82.255482,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_126_1.jpg",
      "https://example.com/videos/rpt_126_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-16T05:57:38.121590Z",
    "updatedAt": "2025-09-16T20:57:38.121590Z",
    "verifiedBy": "official_126",
    "verifiedAt": "2025-09-16T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_127",
    "userId": "user_1127",
    "userName": "Sai Iyer",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 8.765069,
    "longitude": 78.142894,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_127_1.jpg",
      "https://example.com/videos/rpt_127_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-14T03:57:38.121590Z",
    "updatedAt": "2025-09-14T19:57:38.121590Z",
    "verifiedBy": "official_127",
    "verifiedAt": "2025-09-14T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_128",
    "userId": "user_1128",
    "userName": "Reyansh Menon",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.628788,
    "longitude": 69.642889,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_128_1.jpg",
      "https://example.com/videos/rpt_128_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-16T03:57:38.121590Z",
    "updatedAt": "2025-09-16T20:57:38.121590Z",
    "verifiedBy": "official_128",
    "verifiedAt": "2025-09-16T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_129",
    "userId": "user_1129",
    "userName": "Reyansh Singh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 20.910714,
    "longitude": 70.360772,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_129_1.jpg",
      "https://example.com/videos/rpt_129_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-07T05:57:38.121590Z",
    "updatedAt": "2025-09-07T21:57:38.121590Z",
    "verifiedBy": "official_129",
    "verifiedAt": "2025-09-07T21:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_130",
    "userId": "user_1130",
    "userName": "Aadhya Gupta",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.483046,
    "longitude": 69.057127,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_130_1.jpg",
      "https://example.com/videos/rpt_130_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-16T04:57:38.121590Z",
    "updatedAt": "2025-09-16T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_131",
    "userId": "user_1131",
    "userName": "Arjun Iyer",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.466786,
    "longitude": 70.078041,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_131_1.jpg",
      "https://example.com/videos/rpt_131_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-11T20:57:38.121590Z",
    "updatedAt": "2025-09-12T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_132",
    "userId": "user_1132",
    "userName": "Aarav Khan",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.215912,
    "longitude": 68.974497,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_132_1.jpg",
      "https://example.com/videos/rpt_132_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-06T23:57:38.121590Z",
    "updatedAt": "2025-09-07T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_133",
    "userId": "user_1133",
    "userName": "Navya Singh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 14.810356,
    "longitude": 74.142239,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_133_1.jpg",
      "https://example.com/videos/rpt_133_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-20T13:57:38.121590Z",
    "updatedAt": "2025-09-20T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_134",
    "userId": "user_1134",
    "userName": "Krishna Patel",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 16.978054,
    "longitude": 73.288027,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_134_1.jpg",
      "https://example.com/videos/rpt_134_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-08T03:57:38.121590Z",
    "updatedAt": "2025-09-08T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_135",
    "userId": "user_1135",
    "userName": "Sai Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 18.636147,
    "longitude": 72.893176,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_135_1.jpg",
      "https://example.com/videos/rpt_135_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-20T04:57:38.121590Z",
    "updatedAt": "2025-09-20T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_136",
    "userId": "user_1136",
    "userName": "Kiara Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 15.403007,
    "longitude": 73.852915,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_136_1.jpg",
      "https://example.com/videos/rpt_136_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-09T03:57:38.121590Z",
    "updatedAt": "2025-09-09T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_137",
    "userId": "user_1137",
    "userName": "Navya Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 15.513308,
    "longitude": 73.818415,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_137_1.jpg",
      "https://example.com/videos/rpt_137_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-12T01:57:38.121590Z",
    "updatedAt": "2025-09-12T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_138",
    "userId": "user_1138",
    "userName": "Krishna Das",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.090757,
    "longitude": 88.072924,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_138_1.jpg",
      "https://example.com/videos/rpt_138_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-12T06:57:38.121590Z",
    "updatedAt": "2025-09-12T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_139",
    "userId": "user_1139",
    "userName": "Aditya Gowda",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 16.189735,
    "longitude": 81.115611,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_139_1.jpg",
      "https://example.com/videos/rpt_139_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-17T19:57:38.121590Z",
    "updatedAt": "2025-09-18T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_140",
    "userId": "user_1140",
    "userName": "Vihaan Mukherjee",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 14.426685,
    "longitude": 80.003352,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_140_1.jpg",
      "https://example.com/videos/rpt_140_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-16T06:57:38.121590Z",
    "updatedAt": "2025-09-16T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_141",
    "userId": "user_1141",
    "userName": "Aditya Patel",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.253494,
    "longitude": 84.916104,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_141_1.jpg",
      "https://example.com/videos/rpt_141_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-20T12:57:38.121590Z",
    "updatedAt": "2025-09-20T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_142",
    "userId": "user_1142",
    "userName": "Vihaan Nair",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.851906,
    "longitude": 69.372188,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_142_1.jpg",
      "https://example.com/videos/rpt_142_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-09T16:57:38.121590Z",
    "updatedAt": "2025-09-10T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_143",
    "userId": "user_1143",
    "userName": "Kiara Ghosh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.749132,
    "longitude": 72.12964,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_143_1.jpg",
      "https://example.com/videos/rpt_143_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-15T01:57:38.121590Z",
    "updatedAt": "2025-09-16T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_144",
    "userId": "user_1144",
    "userName": "Aarohi Menon",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 8.092156,
    "longitude": 77.556405,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_144_1.jpg",
      "https://example.com/videos/rpt_144_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-11T13:57:38.121590Z",
    "updatedAt": "2025-09-12T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_145",
    "userId": "user_1145",
    "userName": "Saanvi Iyer",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.085171,
    "longitude": 72.861532,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_145_1.jpg",
      "https://example.com/videos/rpt_145_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-10T20:57:38.121590Z",
    "updatedAt": "2025-09-11T14:57:38.121590Z",
    "verifiedBy": "official_145",
    "verifiedAt": "2025-09-11T14:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_146",
    "userId": "user_1146",
    "userName": "Zara Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 13.085593,
    "longitude": 80.291143,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_146_1.jpg",
      "https://example.com/videos/rpt_146_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-09T08:57:38.121590Z",
    "updatedAt": "2025-09-09T22:57:38.121590Z",
    "verifiedBy": "official_146",
    "verifiedAt": "2025-09-09T22:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_147",
    "userId": "user_1147",
    "userName": "Vihaan Mukherjee",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.552181,
    "longitude": 88.363055,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_147_1.jpg",
      "https://example.com/videos/rpt_147_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-11T12:57:38.121590Z",
    "updatedAt": "2025-09-11T14:57:38.121590Z",
    "verifiedBy": "official_147",
    "verifiedAt": "2025-09-11T14:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_148",
    "userId": "user_1148",
    "userName": "Kiara Rao",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 17.707701,
    "longitude": 83.216917,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_148_1.jpg",
      "https://example.com/videos/rpt_148_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-09T12:57:38.121590Z",
    "updatedAt": "2025-09-09T20:57:38.121590Z",
    "verifiedBy": "official_148",
    "verifiedAt": "2025-09-09T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_149",
    "userId": "user_1149",
    "userName": "Diya Patel",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 9.916602,
    "longitude": 76.266821,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_149_1.jpg",
      "https://example.com/videos/rpt_149_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-16T06:57:38.121590Z",
    "updatedAt": "2025-09-16T23:57:38.121590Z",
    "verifiedBy": "official_149",
    "verifiedAt": "2025-09-16T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_150",
    "userId": "user_1150",
    "userName": "Meera Khan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 12.914642,
    "longitude": 74.847133,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_150_1.jpg",
      "https://example.com/videos/rpt_150_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-06T19:57:38.121590Z",
    "updatedAt": "2025-09-07T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_151",
    "userId": "user_1151",
    "userName": "Kiara Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.792979,
    "longitude": 85.820193,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_151_1.jpg",
      "https://example.com/videos/rpt_151_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-17T03:57:38.121590Z",
    "updatedAt": "2025-09-18T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_152",
    "userId": "user_1152",
    "userName": "Meera Patel",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 20.31527,
    "longitude": 86.622062,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_152_1.jpg",
      "https://example.com/videos/rpt_152_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-20T13:57:38.121590Z",
    "updatedAt": "2025-09-21T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_153",
    "userId": "user_1153",
    "userName": "Aditya Menon",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.60377,
    "longitude": 87.532573,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_153_1.jpg",
      "https://example.com/videos/rpt_153_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-18T16:57:38.121590Z",
    "updatedAt": "2025-09-19T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_154",
    "userId": "user_1154",
    "userName": "Arjun Iyer",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 11.954886,
    "longitude": 79.815413,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_154_1.jpg",
      "https://example.com/videos/rpt_154_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-14T19:57:38.121590Z",
    "updatedAt": "2025-09-15T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_155",
    "userId": "user_1155",
    "userName": "Muhammad Iyer",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 16.98362,
    "longitude": 82.243888,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_155_1.jpg",
      "https://example.com/videos/rpt_155_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-20T00:57:38.121590Z",
    "updatedAt": "2025-09-20T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_156",
    "userId": "user_1156",
    "userName": "Navya Verma",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 8.766045,
    "longitude": 78.136161,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_156_1.jpg",
      "https://example.com/videos/rpt_156_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-15T02:57:38.121590Z",
    "updatedAt": "2025-09-15T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_157",
    "userId": "user_1157",
    "userName": "Krishna Pillai",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.64303,
    "longitude": 69.62761,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_157_1.jpg",
      "https://example.com/videos/rpt_157_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-10T07:57:38.121590Z",
    "updatedAt": "2025-09-10T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_158",
    "userId": "user_1158",
    "userName": "Sai Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 20.882968,
    "longitude": 70.379629,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_158_1.jpg",
      "https://example.com/videos/rpt_158_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-07T11:57:38.121590Z",
    "updatedAt": "2025-09-08T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_159",
    "userId": "user_1159",
    "userName": "Zara Ghosh",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.467151,
    "longitude": 69.078982,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_159_1.jpg",
      "https://example.com/videos/rpt_159_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T07:57:38.121590Z",
    "updatedAt": "2025-09-13T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_160",
    "userId": "user_1160",
    "userName": "Saanvi Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.446513,
    "longitude": 70.066618,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_160_1.jpg",
      "https://example.com/videos/rpt_160_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-09T20:57:38.121590Z",
    "updatedAt": "2025-09-10T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_161",
    "userId": "user_1161",
    "userName": "Janhvi Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.221507,
    "longitude": 68.968926,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_161_1.jpg",
      "https://example.com/videos/rpt_161_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-10T22:57:38.121590Z",
    "updatedAt": "2025-09-11T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_162",
    "userId": "user_1162",
    "userName": "Aditya Das",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 14.836732,
    "longitude": 74.13005,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_162_1.jpg",
      "https://example.com/videos/rpt_162_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-12T17:57:38.121590Z",
    "updatedAt": "2025-09-13T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_163",
    "userId": "user_1163",
    "userName": "Aarohi Chowdhury",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.99,
    "longitude": 73.306,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_163_1.jpg",
      "https://example.com/videos/rpt_163_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-14T16:57:38.121590Z",
    "updatedAt": "2025-09-15T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_164",
    "userId": "user_1164",
    "userName": "Sai Pillai",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 18.640124,
    "longitude": 72.866723,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_164_1.jpg",
      "https://example.com/videos/rpt_164_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-10T06:57:38.121590Z",
    "updatedAt": "2025-09-10T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_165",
    "userId": "user_1165",
    "userName": "Meera Gupta",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 15.36307,
    "longitude": 73.830391,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_165_1.jpg",
      "https://example.com/videos/rpt_165_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-11T01:57:38.121590Z",
    "updatedAt": "2025-09-11T02:57:38.121590Z",
    "verifiedBy": "official_115",
    "verifiedAt": "2025-09-11T02:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_166",
    "userId": "user_1166",
    "userName": "Meera Nair",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 15.480277,
    "longitude": 73.831648,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_166_1.jpg",
      "https://example.com/videos/rpt_166_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-14T20:57:38.121590Z",
    "updatedAt": "2025-09-15T03:57:38.121590Z",
    "verifiedBy": "official_116",
    "verifiedAt": "2025-09-15T03:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_167",
    "userId": "user_1167",
    "userName": "Janhvi Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.067267,
    "longitude": 88.084074,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_167_1.jpg",
      "https://example.com/videos/rpt_167_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-09T11:57:38.121590Z",
    "updatedAt": "2025-09-10T09:57:38.121590Z",
    "verifiedBy": "official_117",
    "verifiedAt": "2025-09-10T09:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_168",
    "userId": "user_1168",
    "userName": "Ananya Patel",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 16.179906,
    "longitude": 81.14709,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_168_1.jpg",
      "https://example.com/videos/rpt_168_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-10T14:57:38.121590Z",
    "updatedAt": "2025-09-11T04:57:38.121590Z",
    "verifiedBy": "official_118",
    "verifiedAt": "2025-09-11T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_169",
    "userId": "user_1169",
    "userName": "Ananya Das",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 14.432755,
    "longitude": 79.971376,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_169_1.jpg",
      "https://example.com/videos/rpt_169_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-15T20:57:38.121590Z",
    "updatedAt": "2025-09-16T18:57:38.121590Z",
    "verifiedBy": "official_119",
    "verifiedAt": "2025-09-16T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_170",
    "userId": "user_1170",
    "userName": "Aditya Singh",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.298167,
    "longitude": 84.90601,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_170_1.jpg",
      "https://example.com/videos/rpt_170_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-19T18:57:38.121590Z",
    "updatedAt": "2025-09-20T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_171",
    "userId": "user_1171",
    "userName": "Aarav Rao",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.841128,
    "longitude": 69.344855,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_171_1.jpg",
      "https://example.com/videos/rpt_171_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-15T19:57:38.121590Z",
    "updatedAt": "2025-09-16T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_172",
    "userId": "user_1172",
    "userName": "Sai Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 21.762793,
    "longitude": 72.161342,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_172_1.jpg",
      "https://example.com/videos/rpt_172_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-14T06:57:38.121590Z",
    "updatedAt": "2025-09-14T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_173",
    "userId": "user_1173",
    "userName": "Diya Verma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 8.082023,
    "longitude": 77.560758,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_173_1.jpg",
      "https://example.com/videos/rpt_173_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-17T16:57:38.121590Z",
    "updatedAt": "2025-09-18T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_174",
    "userId": "user_1174",
    "userName": "Kiara Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.062332,
    "longitude": 72.869178,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_174_1.jpg",
      "https://example.com/videos/rpt_174_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-18T18:57:38.121590Z",
    "updatedAt": "2025-09-18T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_175",
    "userId": "user_1175",
    "userName": "Navya Pillai",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 13.081709,
    "longitude": 80.270031,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_175_1.jpg",
      "https://example.com/videos/rpt_175_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-09T12:57:38.121590Z",
    "updatedAt": "2025-09-09T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_176",
    "userId": "user_1176",
    "userName": "Reyansh Singh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.573088,
    "longitude": 88.339346,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_176_1.jpg",
      "https://example.com/videos/rpt_176_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-11T20:57:38.121590Z",
    "updatedAt": "2025-09-12T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_177",
    "userId": "user_1177",
    "userName": "Diya Yadav",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 17.683511,
    "longitude": 83.235628,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_177_1.jpg",
      "https://example.com/videos/rpt_177_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-12T06:57:38.121590Z",
    "updatedAt": "2025-09-12T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_178",
    "userId": "user_1178",
    "userName": "Janhvi Chauhan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 9.938489,
    "longitude": 76.250696,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_178_1.jpg",
      "https://example.com/videos/rpt_178_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-18T11:57:38.121590Z",
    "updatedAt": "2025-09-19T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_179",
    "userId": "user_1179",
    "userName": "Janhvi Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 12.920318,
    "longitude": 74.863684,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_179_1.jpg",
      "https://example.com/videos/rpt_179_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-07T14:57:38.121590Z",
    "updatedAt": "2025-09-08T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_180",
    "userId": "user_1180",
    "userName": "Ananya Verma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.794393,
    "longitude": 85.850361,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_180_1.jpg",
      "https://example.com/videos/rpt_180_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-18T12:57:38.121590Z",
    "updatedAt": "2025-09-18T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_181",
    "userId": "user_1181",
    "userName": "Sai Singh",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 20.307045,
    "longitude": 86.630859,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_181_1.jpg",
      "https://example.com/videos/rpt_181_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-19T17:57:38.121590Z",
    "updatedAt": "2025-09-20T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_182",
    "userId": "user_1182",
    "userName": "Vihaan Rao",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.628579,
    "longitude": 87.50272,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_182_1.jpg",
      "https://example.com/videos/rpt_182_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-13T22:57:38.121590Z",
    "updatedAt": "2025-09-14T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_183",
    "userId": "user_1183",
    "userName": "Aadhya Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 11.927735,
    "longitude": 79.818562,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_183_1.jpg",
      "https://example.com/videos/rpt_183_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-17T19:57:38.121590Z",
    "updatedAt": "2025-09-18T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_184",
    "userId": "user_1184",
    "userName": "Kiara Verma",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.992989,
    "longitude": 82.270773,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_184_1.jpg",
      "https://example.com/videos/rpt_184_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-09T08:57:38.121590Z",
    "updatedAt": "2025-09-09T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_185",
    "userId": "user_1185",
    "userName": "Navya Reddy",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 8.743474,
    "longitude": 78.119272,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_185_1.jpg",
      "https://example.com/videos/rpt_185_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-13T12:57:38.121590Z",
    "updatedAt": "2025-09-14T04:57:38.121590Z",
    "verifiedBy": "official_135",
    "verifiedAt": "2025-09-14T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_186",
    "userId": "user_1186",
    "userName": "Vihaan Gupta",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 21.665977,
    "longitude": 69.6277,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_186_1.jpg",
      "https://example.com/videos/rpt_186_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-08T13:57:38.121590Z",
    "updatedAt": "2025-09-08T13:57:38.121590Z",
    "verifiedBy": "official_136",
    "verifiedAt": "2025-09-08T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_187",
    "userId": "user_1187",
    "userName": "Arjun Gupta",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 20.88973,
    "longitude": 70.387583,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_187_1.jpg",
      "https://example.com/videos/rpt_187_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-10T09:57:38.121590Z",
    "updatedAt": "2025-09-11T08:57:38.121590Z",
    "verifiedBy": "official_137",
    "verifiedAt": "2025-09-11T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_188",
    "userId": "user_1188",
    "userName": "Reyansh Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.458664,
    "longitude": 69.053196,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_188_1.jpg",
      "https://example.com/videos/rpt_188_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-18T00:57:38.121590Z",
    "updatedAt": "2025-09-18T18:57:38.121590Z",
    "verifiedBy": "official_138",
    "verifiedAt": "2025-09-18T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_189",
    "userId": "user_1189",
    "userName": "Aarohi Sharma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.463683,
    "longitude": 70.062177,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_189_1.jpg",
      "https://example.com/videos/rpt_189_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-07T20:57:38.121590Z",
    "updatedAt": "2025-09-08T00:57:38.121590Z",
    "verifiedBy": "official_139",
    "verifiedAt": "2025-09-08T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_190",
    "userId": "user_1190",
    "userName": "Muhammad Menon",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.230663,
    "longitude": 68.986154,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_190_1.jpg",
      "https://example.com/videos/rpt_190_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-19T12:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_191",
    "userId": "user_1191",
    "userName": "Krishna Mukherjee",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 14.830074,
    "longitude": 74.145887,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_191_1.jpg",
      "https://example.com/videos/rpt_191_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-07T13:57:38.121590Z",
    "updatedAt": "2025-09-07T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_192",
    "userId": "user_1192",
    "userName": "Ishaan Mukherjee",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 16.99818,
    "longitude": 73.329859,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_192_1.jpg",
      "https://example.com/videos/rpt_192_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-08T23:57:38.121590Z",
    "updatedAt": "2025-09-09T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_193",
    "userId": "user_1193",
    "userName": "Aditya Ghosh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 18.648552,
    "longitude": 72.885624,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_193_1.jpg",
      "https://example.com/videos/rpt_193_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-13T02:57:38.121590Z",
    "updatedAt": "2025-09-13T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_194",
    "userId": "user_1194",
    "userName": "Ananya Reddy",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 15.394561,
    "longitude": 73.852465,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_194_1.jpg",
      "https://example.com/videos/rpt_194_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-15T18:57:38.121590Z",
    "updatedAt": "2025-09-15T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_195",
    "userId": "user_1195",
    "userName": "Meera Verma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 15.47271,
    "longitude": 73.83054,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_195_1.jpg",
      "https://example.com/videos/rpt_195_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-13T02:57:38.121590Z",
    "updatedAt": "2025-09-13T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_196",
    "userId": "user_1196",
    "userName": "Meera Rao",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.071091,
    "longitude": 88.089129,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_196_1.jpg",
      "https://example.com/videos/rpt_196_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-09T18:57:38.121590Z",
    "updatedAt": "2025-09-10T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_197",
    "userId": "user_1197",
    "userName": "Aadhya Chauhan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 16.208896,
    "longitude": 81.139825,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_197_1.jpg",
      "https://example.com/videos/rpt_197_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-19T19:57:38.121590Z",
    "updatedAt": "2025-09-20T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_198",
    "userId": "user_1198",
    "userName": "Aarohi Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 14.443716,
    "longitude": 79.967682,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_198_1.jpg",
      "https://example.com/videos/rpt_198_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-08T00:57:38.121590Z",
    "updatedAt": "2025-09-08T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_199",
    "userId": "user_1199",
    "userName": "Arjun Menon",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.289793,
    "longitude": 84.906256,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_199_1.jpg",
      "https://example.com/videos/rpt_199_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-15T07:57:38.121590Z",
    "updatedAt": "2025-09-16T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_200",
    "userId": "user_1200",
    "userName": "Diya Patel",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.812774,
    "longitude": 69.357527,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_200_1.jpg",
      "https://example.com/videos/rpt_200_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-06T21:57:38.121590Z",
    "updatedAt": "2025-09-07T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_201",
    "userId": "user_1201",
    "userName": "Aarohi Nair",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.766274,
    "longitude": 72.149809,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_201_1.jpg",
      "https://example.com/videos/rpt_201_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-10T03:57:38.121590Z",
    "updatedAt": "2025-09-10T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_202",
    "userId": "user_1202",
    "userName": "Aadhya Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 8.066611,
    "longitude": 77.513826,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_202_1.jpg",
      "https://example.com/videos/rpt_202_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-17T17:57:38.121590Z",
    "updatedAt": "2025-09-18T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_203",
    "userId": "user_1203",
    "userName": "Aadhya Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.06655,
    "longitude": 72.896979,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_203_1.jpg",
      "https://example.com/videos/rpt_203_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-13T18:57:38.121590Z",
    "updatedAt": "2025-09-13T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_204",
    "userId": "user_1204",
    "userName": "Janhvi Ghosh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 13.059573,
    "longitude": 80.271975,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_204_1.jpg",
      "https://example.com/videos/rpt_204_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-14T05:57:38.121590Z",
    "updatedAt": "2025-09-15T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_205",
    "userId": "user_1205",
    "userName": "Sai Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.583746,
    "longitude": 88.369254,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_205_1.jpg",
      "https://example.com/videos/rpt_205_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-18T22:57:38.121590Z",
    "updatedAt": "2025-09-19T03:57:38.121590Z",
    "verifiedBy": "official_105",
    "verifiedAt": "2025-09-19T03:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_206",
    "userId": "user_1206",
    "userName": "Kiara Shetty",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 17.686972,
    "longitude": 83.212397,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_206_1.jpg",
      "https://example.com/videos/rpt_206_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-11T15:57:38.121590Z",
    "updatedAt": "2025-09-11T23:57:38.121590Z",
    "verifiedBy": "official_106",
    "verifiedAt": "2025-09-11T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_207",
    "userId": "user_1207",
    "userName": "Saanvi Ghosh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 9.917624,
    "longitude": 76.279328,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_207_1.jpg",
      "https://example.com/videos/rpt_207_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-20T03:57:38.121590Z",
    "updatedAt": "2025-09-20T13:57:38.121590Z",
    "verifiedBy": "official_107",
    "verifiedAt": "2025-09-20T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_208",
    "userId": "user_1208",
    "userName": "Aarav Verma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 12.923258,
    "longitude": 74.83885,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_208_1.jpg",
      "https://example.com/videos/rpt_208_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-15T13:57:38.121590Z",
    "updatedAt": "2025-09-16T01:57:38.121590Z",
    "verifiedBy": "official_108",
    "verifiedAt": "2025-09-16T01:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_209",
    "userId": "user_1209",
    "userName": "Ishaan Menon",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.810681,
    "longitude": 85.851788,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_209_1.jpg",
      "https://example.com/videos/rpt_209_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-20T00:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": "official_109",
    "verifiedAt": "2025-09-20T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_210",
    "userId": "user_1210",
    "userName": "Zara Iyer",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 20.320839,
    "longitude": 86.595611,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_210_1.jpg",
      "https://example.com/videos/rpt_210_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-12T15:57:38.121590Z",
    "updatedAt": "2025-09-12T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_211",
    "userId": "user_1211",
    "userName": "Diya Gupta",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.61192,
    "longitude": 87.496899,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_211_1.jpg",
      "https://example.com/videos/rpt_211_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-16T22:57:38.121590Z",
    "updatedAt": "2025-09-17T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_212",
    "userId": "user_1212",
    "userName": "Muhammad Mukherjee",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 11.950568,
    "longitude": 79.797599,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_212_1.jpg",
      "https://example.com/videos/rpt_212_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-11T08:57:38.121590Z",
    "updatedAt": "2025-09-11T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_213",
    "userId": "user_1213",
    "userName": "Vihaan Rao",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 17.004051,
    "longitude": 82.238377,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_213_1.jpg",
      "https://example.com/videos/rpt_213_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-11T08:57:38.121590Z",
    "updatedAt": "2025-09-11T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_214",
    "userId": "user_1214",
    "userName": "Arjun Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 8.744418,
    "longitude": 78.118158,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_214_1.jpg",
      "https://example.com/videos/rpt_214_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-07T02:57:38.121590Z",
    "updatedAt": "2025-09-07T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_215",
    "userId": "user_1215",
    "userName": "Aarohi Reddy",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.619344,
    "longitude": 69.640719,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_215_1.jpg",
      "https://example.com/videos/rpt_215_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-09T15:57:38.121590Z",
    "updatedAt": "2025-09-10T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_216",
    "userId": "user_1216",
    "userName": "Meera Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 20.923075,
    "longitude": 70.371847,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_216_1.jpg",
      "https://example.com/videos/rpt_216_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-14T08:57:38.121590Z",
    "updatedAt": "2025-09-14T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_217",
    "userId": "user_1217",
    "userName": "Aarohi Yadav",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.476759,
    "longitude": 69.094525,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_217_1.jpg",
      "https://example.com/videos/rpt_217_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-18T00:57:38.121590Z",
    "updatedAt": "2025-09-18T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_218",
    "userId": "user_1218",
    "userName": "Arjun Ghosh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.464387,
    "longitude": 70.066069,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_218_1.jpg",
      "https://example.com/videos/rpt_218_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-09T09:57:38.121590Z",
    "updatedAt": "2025-09-10T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_219",
    "userId": "user_1219",
    "userName": "Ananya Rao",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.224164,
    "longitude": 68.946756,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_219_1.jpg",
      "https://example.com/videos/rpt_219_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-07T01:57:38.121590Z",
    "updatedAt": "2025-09-07T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_220",
    "userId": "user_1220",
    "userName": "Muhammad Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 14.830838,
    "longitude": 74.13349,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_220_1.jpg",
      "https://example.com/videos/rpt_220_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-19T23:57:38.121590Z",
    "updatedAt": "2025-09-20T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_221",
    "userId": "user_1221",
    "userName": "Zara Singh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.995666,
    "longitude": 73.29938,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_221_1.jpg",
      "https://example.com/videos/rpt_221_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-17T22:57:38.121590Z",
    "updatedAt": "2025-09-18T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_222",
    "userId": "user_1222",
    "userName": "Navya Gowda",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 18.660117,
    "longitude": 72.888142,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_222_1.jpg",
      "https://example.com/videos/rpt_222_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-14T18:57:38.121590Z",
    "updatedAt": "2025-09-14T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_223",
    "userId": "user_1223",
    "userName": "Aditya Singh",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 15.362762,
    "longitude": 73.847799,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_223_1.jpg",
      "https://example.com/videos/rpt_223_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-07T12:57:38.121590Z",
    "updatedAt": "2025-09-07T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_224",
    "userId": "user_1224",
    "userName": "Vihaan Pillai",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 15.495765,
    "longitude": 73.810886,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_224_1.jpg",
      "https://example.com/videos/rpt_224_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-16T07:57:38.121590Z",
    "updatedAt": "2025-09-17T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_225",
    "userId": "user_1225",
    "userName": "Zara Yadav",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.079152,
    "longitude": 88.086256,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_225_1.jpg",
      "https://example.com/videos/rpt_225_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-11T21:57:38.121590Z",
    "updatedAt": "2025-09-12T05:57:38.121590Z",
    "verifiedBy": "official_125",
    "verifiedAt": "2025-09-12T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_226",
    "userId": "user_1226",
    "userName": "Saanvi Verma",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.168906,
    "longitude": 81.161312,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_226_1.jpg",
      "https://example.com/videos/rpt_226_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-18T22:57:38.121590Z",
    "updatedAt": "2025-09-19T17:57:38.121590Z",
    "verifiedBy": "official_126",
    "verifiedAt": "2025-09-19T17:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_227",
    "userId": "user_1227",
    "userName": "Vivaan Shetty",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 14.466961,
    "longitude": 80.005447,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_227_1.jpg",
      "https://example.com/videos/rpt_227_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-19T17:57:38.121590Z",
    "updatedAt": "2025-09-20T10:57:38.121590Z",
    "verifiedBy": "official_127",
    "verifiedAt": "2025-09-20T10:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_228",
    "userId": "user_1228",
    "userName": "Aarav Rao",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.250952,
    "longitude": 84.896841,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_228_1.jpg",
      "https://example.com/videos/rpt_228_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-07T23:57:38.121590Z",
    "updatedAt": "2025-09-08T21:57:38.121590Z",
    "verifiedBy": "official_128",
    "verifiedAt": "2025-09-08T21:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_229",
    "userId": "user_1229",
    "userName": "Ananya Singh",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.836419,
    "longitude": 69.37683,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_229_1.jpg",
      "https://example.com/videos/rpt_229_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-12T16:57:38.121590Z",
    "updatedAt": "2025-09-12T22:57:38.121590Z",
    "verifiedBy": "official_129",
    "verifiedAt": "2025-09-12T22:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_230",
    "userId": "user_1230",
    "userName": "Navya Verma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.74941,
    "longitude": 72.143146,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_230_1.jpg",
      "https://example.com/videos/rpt_230_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-09T03:57:38.121590Z",
    "updatedAt": "2025-09-10T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_231",
    "userId": "user_1231",
    "userName": "Sai Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 8.102803,
    "longitude": 77.518737,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_231_1.jpg",
      "https://example.com/videos/rpt_231_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-12T17:57:38.121590Z",
    "updatedAt": "2025-09-12T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_232",
    "userId": "user_1232",
    "userName": "Vihaan Menon",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.097286,
    "longitude": 72.895308,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_232_1.jpg",
      "https://example.com/videos/rpt_232_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-14T06:57:38.121590Z",
    "updatedAt": "2025-09-14T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_233",
    "userId": "user_1233",
    "userName": "Reyansh Shetty",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 13.091396,
    "longitude": 80.259186,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_233_1.jpg",
      "https://example.com/videos/rpt_233_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-08T07:57:38.121590Z",
    "updatedAt": "2025-09-08T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_234",
    "userId": "user_1234",
    "userName": "Aarav Nair",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.58316,
    "longitude": 88.361149,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_234_1.jpg",
      "https://example.com/videos/rpt_234_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-17T23:57:38.121590Z",
    "updatedAt": "2025-09-18T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_235",
    "userId": "user_1235",
    "userName": "Ishaan Mukherjee",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 17.684778,
    "longitude": 83.198305,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_235_1.jpg",
      "https://example.com/videos/rpt_235_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-08T16:57:38.121590Z",
    "updatedAt": "2025-09-08T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_236",
    "userId": "user_1236",
    "userName": "Reyansh Rao",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 9.932353,
    "longitude": 76.271758,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_236_1.jpg",
      "https://example.com/videos/rpt_236_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-15T03:57:38.121590Z",
    "updatedAt": "2025-09-15T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_237",
    "userId": "user_1237",
    "userName": "Diya Gowda",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 12.91176,
    "longitude": 74.845781,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_237_1.jpg",
      "https://example.com/videos/rpt_237_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-16T22:57:38.121590Z",
    "updatedAt": "2025-09-17T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_238",
    "userId": "user_1238",
    "userName": "Vihaan Pillai",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.812781,
    "longitude": 85.832337,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_238_1.jpg",
      "https://example.com/videos/rpt_238_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-20T05:57:38.121590Z",
    "updatedAt": "2025-09-20T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_239",
    "userId": "user_1239",
    "userName": "Vivaan Gowda",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 20.30919,
    "longitude": 86.633391,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_239_1.jpg",
      "https://example.com/videos/rpt_239_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T13:57:38.121590Z",
    "updatedAt": "2025-09-14T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_240",
    "userId": "user_1240",
    "userName": "Kiara Gupta",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.64794,
    "longitude": 87.528675,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_240_1.jpg",
      "https://example.com/videos/rpt_240_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-10T08:57:38.121590Z",
    "updatedAt": "2025-09-11T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_241",
    "userId": "user_1241",
    "userName": "Arjun Iyer",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 11.953546,
    "longitude": 79.795416,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_241_1.jpg",
      "https://example.com/videos/rpt_241_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-15T17:57:38.121590Z",
    "updatedAt": "2025-09-15T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_242",
    "userId": "user_1242",
    "userName": "Aarohi Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.983611,
    "longitude": 82.23948,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_242_1.jpg",
      "https://example.com/videos/rpt_242_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-07T23:57:38.121590Z",
    "updatedAt": "2025-09-08T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_243",
    "userId": "user_1243",
    "userName": "Reyansh Mukherjee",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 8.75863,
    "longitude": 78.13259,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_243_1.jpg",
      "https://example.com/videos/rpt_243_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-06T19:57:38.121590Z",
    "updatedAt": "2025-09-07T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_244",
    "userId": "user_1244",
    "userName": "Vihaan Das",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.630742,
    "longitude": 69.62004,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_244_1.jpg",
      "https://example.com/videos/rpt_244_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-15T21:57:38.121590Z",
    "updatedAt": "2025-09-16T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_245",
    "userId": "user_1245",
    "userName": "Ishaan Chowdhury",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 20.919473,
    "longitude": 70.376623,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_245_1.jpg",
      "https://example.com/videos/rpt_245_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-12T16:57:38.121590Z",
    "updatedAt": "2025-09-12T23:57:38.121590Z",
    "verifiedBy": "official_145",
    "verifiedAt": "2025-09-12T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_246",
    "userId": "user_1246",
    "userName": "Ananya Menon",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.477287,
    "longitude": 69.077327,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_246_1.jpg",
      "https://example.com/videos/rpt_246_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-20T00:57:38.121590Z",
    "updatedAt": "2025-09-20T05:57:38.121590Z",
    "verifiedBy": "official_146",
    "verifiedAt": "2025-09-20T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_247",
    "userId": "user_1247",
    "userName": "Zara Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.464444,
    "longitude": 70.079035,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_247_1.jpg",
      "https://example.com/videos/rpt_247_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-14T07:57:38.121590Z",
    "updatedAt": "2025-09-14T18:57:38.121590Z",
    "verifiedBy": "official_147",
    "verifiedAt": "2025-09-14T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_248",
    "userId": "user_1248",
    "userName": "Vivaan Rao",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.263391,
    "longitude": 68.971044,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_248_1.jpg",
      "https://example.com/videos/rpt_248_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-20T14:57:38.121590Z",
    "updatedAt": "2025-09-20T20:57:38.121590Z",
    "verifiedBy": "official_148",
    "verifiedAt": "2025-09-20T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_249",
    "userId": "user_1249",
    "userName": "Aarohi Khan",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 14.809825,
    "longitude": 74.118703,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_249_1.jpg",
      "https://example.com/videos/rpt_249_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-10T06:57:38.121590Z",
    "updatedAt": "2025-09-10T08:57:38.121590Z",
    "verifiedBy": "official_149",
    "verifiedAt": "2025-09-10T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_250",
    "userId": "user_1250",
    "userName": "Zara Das",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 17.005904,
    "longitude": 73.323049,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_250_1.jpg",
      "https://example.com/videos/rpt_250_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-07T14:57:38.121590Z",
    "updatedAt": "2025-09-07T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_251",
    "userId": "user_1251",
    "userName": "Ishaan Verma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 18.628725,
    "longitude": 72.858691,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_251_1.jpg",
      "https://example.com/videos/rpt_251_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-14T11:57:38.121590Z",
    "updatedAt": "2025-09-15T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_252",
    "userId": "user_1252",
    "userName": "Diya Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 15.388129,
    "longitude": 73.819392,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_252_1.jpg",
      "https://example.com/videos/rpt_252_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-09T05:57:38.121590Z",
    "updatedAt": "2025-09-09T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_253",
    "userId": "user_1253",
    "userName": "Diya Yadav",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 15.513884,
    "longitude": 73.845423,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_253_1.jpg",
      "https://example.com/videos/rpt_253_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-08T09:57:38.121590Z",
    "updatedAt": "2025-09-09T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_254",
    "userId": "user_1254",
    "userName": "Navya Das",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.069139,
    "longitude": 88.056058,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_254_1.jpg",
      "https://example.com/videos/rpt_254_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-15T07:57:38.121590Z",
    "updatedAt": "2025-09-16T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_255",
    "userId": "user_1255",
    "userName": "Krishna Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 16.175664,
    "longitude": 81.136377,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_255_1.jpg",
      "https://example.com/videos/rpt_255_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-16T21:57:38.121590Z",
    "updatedAt": "2025-09-17T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_256",
    "userId": "user_1256",
    "userName": "Kiara Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 14.421748,
    "longitude": 79.9765,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_256_1.jpg",
      "https://example.com/videos/rpt_256_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-18T16:57:38.121590Z",
    "updatedAt": "2025-09-18T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_257",
    "userId": "user_1257",
    "userName": "Ananya Sharma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.292261,
    "longitude": 84.885753,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_257_1.jpg",
      "https://example.com/videos/rpt_257_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-10T01:57:38.121590Z",
    "updatedAt": "2025-09-10T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_258",
    "userId": "user_1258",
    "userName": "Vivaan Shetty",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.832812,
    "longitude": 69.332356,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_258_1.jpg",
      "https://example.com/videos/rpt_258_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-10T21:57:38.121590Z",
    "updatedAt": "2025-09-11T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_259",
    "userId": "user_1259",
    "userName": "Saanvi Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.767671,
    "longitude": 72.141962,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_259_1.jpg",
      "https://example.com/videos/rpt_259_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-16T09:57:38.121590Z",
    "updatedAt": "2025-09-17T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_260",
    "userId": "user_1260",
    "userName": "Aadhya Yadav",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 8.101133,
    "longitude": 77.558177,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_260_1.jpg",
      "https://example.com/videos/rpt_260_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-16T00:57:38.121590Z",
    "updatedAt": "2025-09-16T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_261",
    "userId": "user_1261",
    "userName": "Saanvi Reddy",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.067005,
    "longitude": 72.897815,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_261_1.jpg",
      "https://example.com/videos/rpt_261_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-19T03:57:38.121590Z",
    "updatedAt": "2025-09-19T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_262",
    "userId": "user_1262",
    "userName": "Aarohi Chauhan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 13.079583,
    "longitude": 80.268505,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_262_1.jpg",
      "https://example.com/videos/rpt_262_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-08T02:57:38.121590Z",
    "updatedAt": "2025-09-08T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_263",
    "userId": "user_1263",
    "userName": "Krishna Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.583749,
    "longitude": 88.382652,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_263_1.jpg",
      "https://example.com/videos/rpt_263_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-20T06:57:38.121590Z",
    "updatedAt": "2025-09-20T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_264",
    "userId": "user_1264",
    "userName": "Aadhya Rao",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 17.707061,
    "longitude": 83.211965,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_264_1.jpg",
      "https://example.com/videos/rpt_264_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-17T05:57:38.121590Z",
    "updatedAt": "2025-09-17T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_265",
    "userId": "user_1265",
    "userName": "Saanvi Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 9.928831,
    "longitude": 76.270786,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_265_1.jpg",
      "https://example.com/videos/rpt_265_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-18T19:57:38.121590Z",
    "updatedAt": "2025-09-19T11:57:38.121590Z",
    "verifiedBy": "official_115",
    "verifiedAt": "2025-09-19T11:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_266",
    "userId": "user_1266",
    "userName": "Ishaan Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 12.938765,
    "longitude": 74.838877,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_266_1.jpg",
      "https://example.com/videos/rpt_266_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-14T07:57:38.121590Z",
    "updatedAt": "2025-09-14T18:57:38.121590Z",
    "verifiedBy": "official_116",
    "verifiedAt": "2025-09-14T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_267",
    "userId": "user_1267",
    "userName": "Vivaan Shetty",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.817745,
    "longitude": 85.852293,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_267_1.jpg",
      "https://example.com/videos/rpt_267_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-18T05:57:38.121590Z",
    "updatedAt": "2025-09-18T16:57:38.121590Z",
    "verifiedBy": "official_117",
    "verifiedAt": "2025-09-18T16:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_268",
    "userId": "user_1268",
    "userName": "Aditya Rao",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 20.299399,
    "longitude": 86.638355,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_268_1.jpg",
      "https://example.com/videos/rpt_268_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-11T07:57:38.121590Z",
    "updatedAt": "2025-09-12T02:57:38.121590Z",
    "verifiedBy": "official_118",
    "verifiedAt": "2025-09-12T02:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_269",
    "userId": "user_1269",
    "userName": "Sai Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.605128,
    "longitude": 87.515389,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_269_1.jpg",
      "https://example.com/videos/rpt_269_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-17T11:57:38.121590Z",
    "updatedAt": "2025-09-18T00:57:38.121590Z",
    "verifiedBy": "official_119",
    "verifiedAt": "2025-09-18T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_270",
    "userId": "user_1270",
    "userName": "Reyansh Shetty",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 11.964948,
    "longitude": 79.811909,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_270_1.jpg",
      "https://example.com/videos/rpt_270_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-12T11:57:38.121590Z",
    "updatedAt": "2025-09-12T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_271",
    "userId": "user_1271",
    "userName": "Meera Patel",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 16.978545,
    "longitude": 82.230115,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_271_1.jpg",
      "https://example.com/videos/rpt_271_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-12T21:57:38.121590Z",
    "updatedAt": "2025-09-13T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_272",
    "userId": "user_1272",
    "userName": "Krishna Iyer",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 8.755404,
    "longitude": 78.146881,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_272_1.jpg",
      "https://example.com/videos/rpt_272_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-13T14:57:38.121590Z",
    "updatedAt": "2025-09-14T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_273",
    "userId": "user_1273",
    "userName": "Arjun Menon",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.636502,
    "longitude": 69.627429,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_273_1.jpg",
      "https://example.com/videos/rpt_273_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-13T00:57:38.121590Z",
    "updatedAt": "2025-09-13T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_274",
    "userId": "user_1274",
    "userName": "Kiara Gowda",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 20.932,
    "longitude": 70.375637,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_274_1.jpg",
      "https://example.com/videos/rpt_274_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-16T10:57:38.121590Z",
    "updatedAt": "2025-09-16T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_275",
    "userId": "user_1275",
    "userName": "Vihaan Menon",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.45966,
    "longitude": 69.051384,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_275_1.jpg",
      "https://example.com/videos/rpt_275_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-18T07:57:38.121590Z",
    "updatedAt": "2025-09-18T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_276",
    "userId": "user_1276",
    "userName": "Diya Gowda",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.449804,
    "longitude": 70.058586,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_276_1.jpg",
      "https://example.com/videos/rpt_276_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-19T14:57:38.121590Z",
    "updatedAt": "2025-09-20T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_277",
    "userId": "user_1277",
    "userName": "Aadhya Yadav",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.252204,
    "longitude": 68.968241,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_277_1.jpg",
      "https://example.com/videos/rpt_277_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-16T04:57:38.121590Z",
    "updatedAt": "2025-09-16T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_278",
    "userId": "user_1278",
    "userName": "Vivaan Sharma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 14.83189,
    "longitude": 74.146687,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_278_1.jpg",
      "https://example.com/videos/rpt_278_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-08T16:57:38.121590Z",
    "updatedAt": "2025-09-09T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_279",
    "userId": "user_1279",
    "userName": "Navya Verma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 16.997147,
    "longitude": 73.310726,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_279_1.jpg",
      "https://example.com/videos/rpt_279_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-18T20:57:38.121590Z",
    "updatedAt": "2025-09-19T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_280",
    "userId": "user_1280",
    "userName": "Ishaan Khan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 18.658058,
    "longitude": 72.880971,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_280_1.jpg",
      "https://example.com/videos/rpt_280_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-10T21:57:38.121590Z",
    "updatedAt": "2025-09-11T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_281",
    "userId": "user_1281",
    "userName": "Navya Pillai",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 15.403102,
    "longitude": 73.836124,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_281_1.jpg",
      "https://example.com/videos/rpt_281_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-10T14:57:38.121590Z",
    "updatedAt": "2025-09-11T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_282",
    "userId": "user_1282",
    "userName": "Aarohi Yadav",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 15.51564,
    "longitude": 73.836007,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_282_1.jpg",
      "https://example.com/videos/rpt_282_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-15T05:57:38.121590Z",
    "updatedAt": "2025-09-15T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_283",
    "userId": "user_1283",
    "userName": "Janhvi Sharma",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.077148,
    "longitude": 88.06028,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_283_1.jpg",
      "https://example.com/videos/rpt_283_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-14T02:57:38.121590Z",
    "updatedAt": "2025-09-14T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_284",
    "userId": "user_1284",
    "userName": "Zara Verma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.201513,
    "longitude": 81.147619,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_284_1.jpg",
      "https://example.com/videos/rpt_284_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-12T14:57:38.121590Z",
    "updatedAt": "2025-09-13T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_285",
    "userId": "user_1285",
    "userName": "Ananya Gowda",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 14.431284,
    "longitude": 79.992532,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_285_1.jpg",
      "https://example.com/videos/rpt_285_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-18T13:57:38.121590Z",
    "updatedAt": "2025-09-18T22:57:38.121590Z",
    "verifiedBy": "official_135",
    "verifiedAt": "2025-09-18T22:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_286",
    "userId": "user_1286",
    "userName": "Aarohi Yadav",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.293483,
    "longitude": 84.915257,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_286_1.jpg",
      "https://example.com/videos/rpt_286_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-08T23:57:38.121590Z",
    "updatedAt": "2025-09-09T01:57:38.121590Z",
    "verifiedBy": "official_136",
    "verifiedAt": "2025-09-09T01:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_287",
    "userId": "user_1287",
    "userName": "Sai Mukherjee",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.820264,
    "longitude": 69.327904,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_287_1.jpg",
      "https://example.com/videos/rpt_287_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-13T10:57:38.121590Z",
    "updatedAt": "2025-09-14T04:57:38.121590Z",
    "verifiedBy": "official_137",
    "verifiedAt": "2025-09-14T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_288",
    "userId": "user_1288",
    "userName": "Navya Chauhan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.766644,
    "longitude": 72.166843,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_288_1.jpg",
      "https://example.com/videos/rpt_288_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-13T15:57:38.121590Z",
    "updatedAt": "2025-09-14T13:57:38.121590Z",
    "verifiedBy": "official_138",
    "verifiedAt": "2025-09-14T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_289",
    "userId": "user_1289",
    "userName": "Reyansh Chowdhury",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 8.096726,
    "longitude": 77.562876,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_289_1.jpg",
      "https://example.com/videos/rpt_289_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-18T23:57:38.121590Z",
    "updatedAt": "2025-09-19T11:57:38.121590Z",
    "verifiedBy": "official_139",
    "verifiedAt": "2025-09-19T11:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_290",
    "userId": "user_1290",
    "userName": "Vivaan Singh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.099069,
    "longitude": 72.852843,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_290_1.jpg",
      "https://example.com/videos/rpt_290_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-12T01:57:38.121590Z",
    "updatedAt": "2025-09-12T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_291",
    "userId": "user_1291",
    "userName": "Ishaan Mukherjee",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 13.098418,
    "longitude": 80.273046,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_291_1.jpg",
      "https://example.com/videos/rpt_291_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-16T18:57:38.121590Z",
    "updatedAt": "2025-09-17T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_292",
    "userId": "user_1292",
    "userName": "Saanvi Singh",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.561589,
    "longitude": 88.384591,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_292_1.jpg",
      "https://example.com/videos/rpt_292_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-08T20:57:38.121590Z",
    "updatedAt": "2025-09-09T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_293",
    "userId": "user_1293",
    "userName": "Diya Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.711301,
    "longitude": 83.201036,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_293_1.jpg",
      "https://example.com/videos/rpt_293_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-06T22:57:38.121590Z",
    "updatedAt": "2025-09-07T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_294",
    "userId": "user_1294",
    "userName": "Navya Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 9.931293,
    "longitude": 76.291946,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_294_1.jpg",
      "https://example.com/videos/rpt_294_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-08T06:57:38.121590Z",
    "updatedAt": "2025-09-08T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_295",
    "userId": "user_1295",
    "userName": "Vihaan Mukherjee",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 12.894405,
    "longitude": 74.855656,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_295_1.jpg",
      "https://example.com/videos/rpt_295_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-19T16:57:38.121590Z",
    "updatedAt": "2025-09-20T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_296",
    "userId": "user_1296",
    "userName": "Aarohi Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.828435,
    "longitude": 85.813765,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_296_1.jpg",
      "https://example.com/videos/rpt_296_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-16T09:57:38.121590Z",
    "updatedAt": "2025-09-16T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_297",
    "userId": "user_1297",
    "userName": "Ishaan Ghosh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 20.306648,
    "longitude": 86.628021,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_297_1.jpg",
      "https://example.com/videos/rpt_297_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-12T19:57:38.121590Z",
    "updatedAt": "2025-09-13T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_298",
    "userId": "user_1298",
    "userName": "Saanvi Yadav",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 21.615847,
    "longitude": 87.496541,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_298_1.jpg",
      "https://example.com/videos/rpt_298_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-13T21:57:38.121590Z",
    "updatedAt": "2025-09-14T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_299",
    "userId": "user_1299",
    "userName": "Muhammad Gowda",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 11.938144,
    "longitude": 79.8313,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_299_1.jpg",
      "https://example.com/videos/rpt_299_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-12T02:57:38.121590Z",
    "updatedAt": "2025-09-13T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_300",
    "userId": "user_1300",
    "userName": "Aarav Khan",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.00696,
    "longitude": 82.25044,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_300_1.jpg",
      "https://example.com/videos/rpt_300_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-20T15:57:38.121590Z",
    "updatedAt": "2025-09-20T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_301",
    "userId": "user_1301",
    "userName": "Muhammad Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 8.757273,
    "longitude": 78.144113,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_301_1.jpg",
      "https://example.com/videos/rpt_301_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-16T00:57:38.121590Z",
    "updatedAt": "2025-09-16T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_302",
    "userId": "user_1302",
    "userName": "Vihaan Yadav",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.649313,
    "longitude": 69.605287,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_302_1.jpg",
      "https://example.com/videos/rpt_302_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-18T00:57:38.121590Z",
    "updatedAt": "2025-09-18T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_303",
    "userId": "user_1303",
    "userName": "Kiara Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 20.885116,
    "longitude": 70.386903,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_303_1.jpg",
      "https://example.com/videos/rpt_303_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-07T23:57:38.121590Z",
    "updatedAt": "2025-09-08T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_304",
    "userId": "user_1304",
    "userName": "Kiara Pillai",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.48038,
    "longitude": 69.06514,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_304_1.jpg",
      "https://example.com/videos/rpt_304_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-19T11:57:38.121590Z",
    "updatedAt": "2025-09-19T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_305",
    "userId": "user_1305",
    "userName": "Aadhya Reddy",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.485148,
    "longitude": 70.080861,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_305_1.jpg",
      "https://example.com/videos/rpt_305_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-19T02:57:38.121590Z",
    "updatedAt": "2025-09-19T02:57:38.121590Z",
    "verifiedBy": "official_105",
    "verifiedAt": "2025-09-19T02:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_306",
    "userId": "user_1306",
    "userName": "Vihaan Ghosh",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.258881,
    "longitude": 68.974265,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_306_1.jpg",
      "https://example.com/videos/rpt_306_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-18T19:57:38.121590Z",
    "updatedAt": "2025-09-19T01:57:38.121590Z",
    "verifiedBy": "official_106",
    "verifiedAt": "2025-09-19T01:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_307",
    "userId": "user_1307",
    "userName": "Vihaan Nair",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 14.80999,
    "longitude": 74.147961,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_307_1.jpg",
      "https://example.com/videos/rpt_307_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-15T17:57:38.121590Z",
    "updatedAt": "2025-09-16T15:57:38.121590Z",
    "verifiedBy": "official_107",
    "verifiedAt": "2025-09-16T15:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_308",
    "userId": "user_1308",
    "userName": "Zara Ghosh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 17.013334,
    "longitude": 73.33455,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_308_1.jpg",
      "https://example.com/videos/rpt_308_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-19T09:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": "official_108",
    "verifiedAt": "2025-09-20T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_309",
    "userId": "user_1309",
    "userName": "Meera Verma",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 18.658111,
    "longitude": 72.889131,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_309_1.jpg",
      "https://example.com/videos/rpt_309_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-12T19:57:38.121590Z",
    "updatedAt": "2025-09-13T04:57:38.121590Z",
    "verifiedBy": "official_109",
    "verifiedAt": "2025-09-13T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_310",
    "userId": "user_1310",
    "userName": "Vivaan Menon",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 15.366097,
    "longitude": 73.861487,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_310_1.jpg",
      "https://example.com/videos/rpt_310_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-18T23:57:38.121590Z",
    "updatedAt": "2025-09-19T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_311",
    "userId": "user_1311",
    "userName": "Sai Menon",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 15.502941,
    "longitude": 73.852256,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_311_1.jpg",
      "https://example.com/videos/rpt_311_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-19T16:57:38.121590Z",
    "updatedAt": "2025-09-19T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_312",
    "userId": "user_1312",
    "userName": "Ananya Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.06264,
    "longitude": 88.064198,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_312_1.jpg",
      "https://example.com/videos/rpt_312_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-16T14:57:38.121590Z",
    "updatedAt": "2025-09-16T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_313",
    "userId": "user_1313",
    "userName": "Sai Gupta",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 16.205888,
    "longitude": 81.119421,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_313_1.jpg",
      "https://example.com/videos/rpt_313_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-07T23:57:38.121590Z",
    "updatedAt": "2025-09-08T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_314",
    "userId": "user_1314",
    "userName": "Aditya Menon",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 14.465157,
    "longitude": 79.980854,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_314_1.jpg",
      "https://example.com/videos/rpt_314_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-19T08:57:38.121590Z",
    "updatedAt": "2025-09-19T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_315",
    "userId": "user_1315",
    "userName": "Zara Yadav",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.275735,
    "longitude": 84.90546,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_315_1.jpg",
      "https://example.com/videos/rpt_315_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-16T15:57:38.121590Z",
    "updatedAt": "2025-09-17T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_316",
    "userId": "user_1316",
    "userName": "Ananya Iyer",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.809631,
    "longitude": 69.359981,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_316_1.jpg",
      "https://example.com/videos/rpt_316_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-18T22:57:38.121590Z",
    "updatedAt": "2025-09-19T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_317",
    "userId": "user_1317",
    "userName": "Meera Patel",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.778144,
    "longitude": 72.135547,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_317_1.jpg",
      "https://example.com/videos/rpt_317_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-06T21:57:38.121590Z",
    "updatedAt": "2025-09-07T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_318",
    "userId": "user_1318",
    "userName": "Reyansh Reddy",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 8.094796,
    "longitude": 77.548372,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_318_1.jpg",
      "https://example.com/videos/rpt_318_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-20T12:57:38.121590Z",
    "updatedAt": "2025-09-20T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_319",
    "userId": "user_1319",
    "userName": "Saanvi Yadav",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.066672,
    "longitude": 72.871881,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_319_1.jpg",
      "https://example.com/videos/rpt_319_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-07T23:57:38.121590Z",
    "updatedAt": "2025-09-08T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_320",
    "userId": "user_1320",
    "userName": "Muhammad Chowdhury",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 13.105951,
    "longitude": 80.272632,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_320_1.jpg",
      "https://example.com/videos/rpt_320_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-09T09:57:38.121590Z",
    "updatedAt": "2025-09-10T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_321",
    "userId": "user_1321",
    "userName": "Meera Das",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.590283,
    "longitude": 88.353259,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_321_1.jpg",
      "https://example.com/videos/rpt_321_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-18T11:57:38.121590Z",
    "updatedAt": "2025-09-19T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_322",
    "userId": "user_1322",
    "userName": "Saanvi Gupta",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 17.673333,
    "longitude": 83.196957,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_322_1.jpg",
      "https://example.com/videos/rpt_322_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-19T05:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_323",
    "userId": "user_1323",
    "userName": "Krishna Gupta",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 9.90919,
    "longitude": 76.253773,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_323_1.jpg",
      "https://example.com/videos/rpt_323_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-09T15:57:38.121590Z",
    "updatedAt": "2025-09-10T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_324",
    "userId": "user_1324",
    "userName": "Zara Patel",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 12.912056,
    "longitude": 74.860266,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_324_1.jpg",
      "https://example.com/videos/rpt_324_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-18T23:57:38.121590Z",
    "updatedAt": "2025-09-19T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_325",
    "userId": "user_1325",
    "userName": "Krishna Mukherjee",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.797615,
    "longitude": 85.807514,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_325_1.jpg",
      "https://example.com/videos/rpt_325_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-14T09:57:38.121590Z",
    "updatedAt": "2025-09-14T18:57:38.121590Z",
    "verifiedBy": "official_125",
    "verifiedAt": "2025-09-14T18:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_326",
    "userId": "user_1326",
    "userName": "Vivaan Verma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 20.32282,
    "longitude": 86.592647,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_326_1.jpg",
      "https://example.com/videos/rpt_326_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-17T01:57:38.121590Z",
    "updatedAt": "2025-09-17T02:57:38.121590Z",
    "verifiedBy": "official_126",
    "verifiedAt": "2025-09-17T02:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_327",
    "userId": "user_1327",
    "userName": "Sai Verma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.623079,
    "longitude": 87.483332,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_327_1.jpg",
      "https://example.com/videos/rpt_327_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-18T04:57:38.121590Z",
    "updatedAt": "2025-09-19T00:57:38.121590Z",
    "verifiedBy": "official_127",
    "verifiedAt": "2025-09-19T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_328",
    "userId": "user_1328",
    "userName": "Navya Gupta",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 11.93647,
    "longitude": 79.831781,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_328_1.jpg",
      "https://example.com/videos/rpt_328_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-17T03:57:38.121590Z",
    "updatedAt": "2025-09-17T09:57:38.121590Z",
    "verifiedBy": "official_128",
    "verifiedAt": "2025-09-17T09:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_329",
    "userId": "user_1329",
    "userName": "Janhvi Yadav",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 17.001645,
    "longitude": 82.257354,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_329_1.jpg",
      "https://example.com/videos/rpt_329_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-17T14:57:38.121590Z",
    "updatedAt": "2025-09-17T17:57:38.121590Z",
    "verifiedBy": "official_129",
    "verifiedAt": "2025-09-17T17:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_330",
    "userId": "user_1330",
    "userName": "Vivaan Ghosh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 8.773844,
    "longitude": 78.155229,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_330_1.jpg",
      "https://example.com/videos/rpt_330_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-15T09:57:38.121590Z",
    "updatedAt": "2025-09-15T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_331",
    "userId": "user_1331",
    "userName": "Diya Chauhan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.61726,
    "longitude": 69.608087,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_331_1.jpg",
      "https://example.com/videos/rpt_331_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-13T01:57:38.121590Z",
    "updatedAt": "2025-09-13T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_332",
    "userId": "user_1332",
    "userName": "Saanvi Gupta",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 20.890895,
    "longitude": 70.351883,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_332_1.jpg",
      "https://example.com/videos/rpt_332_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-18T19:57:38.121590Z",
    "updatedAt": "2025-09-19T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_333",
    "userId": "user_1333",
    "userName": "Arjun Chauhan",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.451593,
    "longitude": 69.061182,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_333_1.jpg",
      "https://example.com/videos/rpt_333_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-14T21:57:38.121590Z",
    "updatedAt": "2025-09-15T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_334",
    "userId": "user_1334",
    "userName": "Aarav Iyer",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.472198,
    "longitude": 70.081825,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_334_1.jpg",
      "https://example.com/videos/rpt_334_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-11T09:57:38.121590Z",
    "updatedAt": "2025-09-11T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_335",
    "userId": "user_1335",
    "userName": "Aadhya Iyer",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.218124,
    "longitude": 68.960128,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_335_1.jpg",
      "https://example.com/videos/rpt_335_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-11T13:57:38.121590Z",
    "updatedAt": "2025-09-11T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_336",
    "userId": "user_1336",
    "userName": "Sai Khan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 14.827905,
    "longitude": 74.15358,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_336_1.jpg",
      "https://example.com/videos/rpt_336_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-19T05:57:38.121590Z",
    "updatedAt": "2025-09-19T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_337",
    "userId": "user_1337",
    "userName": "Krishna Singh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 17.009893,
    "longitude": 73.287295,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_337_1.jpg",
      "https://example.com/videos/rpt_337_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-15T10:57:38.121590Z",
    "updatedAt": "2025-09-15T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_338",
    "userId": "user_1338",
    "userName": "Vihaan Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 18.634763,
    "longitude": 72.884549,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_338_1.jpg",
      "https://example.com/videos/rpt_338_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-16T20:57:38.121590Z",
    "updatedAt": "2025-09-16T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_339",
    "userId": "user_1339",
    "userName": "Diya Nair",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 15.396982,
    "longitude": 73.848505,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_339_1.jpg",
      "https://example.com/videos/rpt_339_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-15T03:57:38.121590Z",
    "updatedAt": "2025-09-15T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_340",
    "userId": "user_1340",
    "userName": "Ishaan Ghosh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 15.477709,
    "longitude": 73.815041,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_340_1.jpg",
      "https://example.com/videos/rpt_340_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-18T07:57:38.121590Z",
    "updatedAt": "2025-09-18T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_341",
    "userId": "user_1341",
    "userName": "Kiara Iyer",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.04422,
    "longitude": 88.091742,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_341_1.jpg",
      "https://example.com/videos/rpt_341_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-17T00:57:38.121590Z",
    "updatedAt": "2025-09-17T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_342",
    "userId": "user_1342",
    "userName": "Zara Reddy",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 16.193176,
    "longitude": 81.142829,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_342_1.jpg",
      "https://example.com/videos/rpt_342_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-18T15:57:38.121590Z",
    "updatedAt": "2025-09-19T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_343",
    "userId": "user_1343",
    "userName": "Vihaan Shetty",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 14.418842,
    "longitude": 79.988146,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_343_1.jpg",
      "https://example.com/videos/rpt_343_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-09T10:57:38.121590Z",
    "updatedAt": "2025-09-09T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_344",
    "userId": "user_1344",
    "userName": "Aarav Gowda",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.28806,
    "longitude": 84.90499,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_344_1.jpg",
      "https://example.com/videos/rpt_344_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-08T19:57:38.121590Z",
    "updatedAt": "2025-09-08T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_345",
    "userId": "user_1345",
    "userName": "Sai Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.816978,
    "longitude": 69.367245,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_345_1.jpg",
      "https://example.com/videos/rpt_345_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-07T23:57:38.121590Z",
    "updatedAt": "2025-09-08T20:57:38.121590Z",
    "verifiedBy": "official_145",
    "verifiedAt": "2025-09-08T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_346",
    "userId": "user_1346",
    "userName": "Ishaan Chauhan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.777417,
    "longitude": 72.151784,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_346_1.jpg",
      "https://example.com/videos/rpt_346_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-09T23:57:38.121590Z",
    "updatedAt": "2025-09-10T16:57:38.121590Z",
    "verifiedBy": "official_146",
    "verifiedAt": "2025-09-10T16:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_347",
    "userId": "user_1347",
    "userName": "Meera Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 8.111286,
    "longitude": 77.518302,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_347_1.jpg",
      "https://example.com/videos/rpt_347_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-06T16:57:38.121590Z",
    "updatedAt": "2025-09-06T19:57:38.121590Z",
    "verifiedBy": "official_147",
    "verifiedAt": "2025-09-06T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_348",
    "userId": "user_1348",
    "userName": "Zara Chauhan",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.083911,
    "longitude": 72.855036,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_348_1.jpg",
      "https://example.com/videos/rpt_348_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-19T01:57:38.121590Z",
    "updatedAt": "2025-09-19T12:57:38.121590Z",
    "verifiedBy": "official_148",
    "verifiedAt": "2025-09-19T12:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_349",
    "userId": "user_1349",
    "userName": "Aditya Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 13.101625,
    "longitude": 80.291485,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_349_1.jpg",
      "https://example.com/videos/rpt_349_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-13T08:57:38.121590Z",
    "updatedAt": "2025-09-13T08:57:38.121590Z",
    "verifiedBy": "official_149",
    "verifiedAt": "2025-09-13T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_350",
    "userId": "user_1350",
    "userName": "Sai Ghosh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.571201,
    "longitude": 88.340666,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_350_1.jpg",
      "https://example.com/videos/rpt_350_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-09T23:57:38.121590Z",
    "updatedAt": "2025-09-10T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_351",
    "userId": "user_1351",
    "userName": "Diya Pillai",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 17.6977,
    "longitude": 83.206673,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_351_1.jpg",
      "https://example.com/videos/rpt_351_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-18T18:57:38.121590Z",
    "updatedAt": "2025-09-19T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_352",
    "userId": "user_1352",
    "userName": "Janhvi Yadav",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 9.91172,
    "longitude": 76.271683,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_352_1.jpg",
      "https://example.com/videos/rpt_352_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-10T04:57:38.121590Z",
    "updatedAt": "2025-09-11T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_353",
    "userId": "user_1353",
    "userName": "Saanvi Khan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 12.901098,
    "longitude": 74.880462,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_353_1.jpg",
      "https://example.com/videos/rpt_353_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-13T02:57:38.121590Z",
    "updatedAt": "2025-09-13T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_354",
    "userId": "user_1354",
    "userName": "Aditya Mukherjee",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.790019,
    "longitude": 85.842604,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_354_1.jpg",
      "https://example.com/videos/rpt_354_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-17T23:57:38.121590Z",
    "updatedAt": "2025-09-18T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_355",
    "userId": "user_1355",
    "userName": "Navya Gowda",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 20.304941,
    "longitude": 86.63291,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_355_1.jpg",
      "https://example.com/videos/rpt_355_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-07T19:57:38.121590Z",
    "updatedAt": "2025-09-08T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_356",
    "userId": "user_1356",
    "userName": "Vivaan Das",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.610794,
    "longitude": 87.485396,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_356_1.jpg",
      "https://example.com/videos/rpt_356_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-14T09:57:38.121590Z",
    "updatedAt": "2025-09-14T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_357",
    "userId": "user_1357",
    "userName": "Meera Pillai",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 11.931881,
    "longitude": 79.817282,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_357_1.jpg",
      "https://example.com/videos/rpt_357_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-18T19:57:38.121590Z",
    "updatedAt": "2025-09-19T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_358",
    "userId": "user_1358",
    "userName": "Aadhya Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 16.984558,
    "longitude": 82.252347,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_358_1.jpg",
      "https://example.com/videos/rpt_358_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-07T13:57:38.121590Z",
    "updatedAt": "2025-09-07T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_359",
    "userId": "user_1359",
    "userName": "Vivaan Gowda",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 8.76531,
    "longitude": 78.142075,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_359_1.jpg",
      "https://example.com/videos/rpt_359_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-13T08:57:38.121590Z",
    "updatedAt": "2025-09-13T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_360",
    "userId": "user_1360",
    "userName": "Vivaan Chowdhury",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.620498,
    "longitude": 69.636096,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_360_1.jpg",
      "https://example.com/videos/rpt_360_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-17T12:57:38.121590Z",
    "updatedAt": "2025-09-18T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_361",
    "userId": "user_1361",
    "userName": "Muhammad Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 20.897997,
    "longitude": 70.383229,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_361_1.jpg",
      "https://example.com/videos/rpt_361_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-13T12:57:38.121590Z",
    "updatedAt": "2025-09-13T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_362",
    "userId": "user_1362",
    "userName": "Krishna Ghosh",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.483025,
    "longitude": 69.083759,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_362_1.jpg",
      "https://example.com/videos/rpt_362_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-12T00:57:38.121590Z",
    "updatedAt": "2025-09-12T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_363",
    "userId": "user_1363",
    "userName": "Diya Verma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.44729,
    "longitude": 70.0606,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_363_1.jpg",
      "https://example.com/videos/rpt_363_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-14T20:57:38.121590Z",
    "updatedAt": "2025-09-15T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_364",
    "userId": "user_1364",
    "userName": "Muhammad Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.21597,
    "longitude": 68.955674,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_364_1.jpg",
      "https://example.com/videos/rpt_364_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-18T18:57:38.121590Z",
    "updatedAt": "2025-09-19T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_365",
    "userId": "user_1365",
    "userName": "Meera Khan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 14.833138,
    "longitude": 74.123775,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_365_1.jpg",
      "https://example.com/videos/rpt_365_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-15T08:57:38.121590Z",
    "updatedAt": "2025-09-16T07:57:38.121590Z",
    "verifiedBy": "official_115",
    "verifiedAt": "2025-09-16T07:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_366",
    "userId": "user_1366",
    "userName": "Zara Chowdhury",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.989132,
    "longitude": 73.328248,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_366_1.jpg",
      "https://example.com/videos/rpt_366_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-07T04:57:38.121590Z",
    "updatedAt": "2025-09-07T05:57:38.121590Z",
    "verifiedBy": "official_116",
    "verifiedAt": "2025-09-07T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_367",
    "userId": "user_1367",
    "userName": "Ananya Sharma",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 18.653201,
    "longitude": 72.873848,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_367_1.jpg",
      "https://example.com/videos/rpt_367_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-15T21:57:38.121590Z",
    "updatedAt": "2025-09-16T05:57:38.121590Z",
    "verifiedBy": "official_117",
    "verifiedAt": "2025-09-16T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_368",
    "userId": "user_1368",
    "userName": "Vihaan Iyer",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 15.387008,
    "longitude": 73.827206,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_368_1.jpg",
      "https://example.com/videos/rpt_368_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-13T22:57:38.121590Z",
    "updatedAt": "2025-09-14T19:57:38.121590Z",
    "verifiedBy": "official_118",
    "verifiedAt": "2025-09-14T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_369",
    "userId": "user_1369",
    "userName": "Aadhya Rao",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 15.485062,
    "longitude": 73.836044,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_369_1.jpg",
      "https://example.com/videos/rpt_369_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-17T13:57:38.121590Z",
    "updatedAt": "2025-09-17T19:57:38.121590Z",
    "verifiedBy": "official_119",
    "verifiedAt": "2025-09-17T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_370",
    "userId": "user_1370",
    "userName": "Sai Nair",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.073395,
    "longitude": 88.059769,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_370_1.jpg",
      "https://example.com/videos/rpt_370_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-16T08:57:38.121590Z",
    "updatedAt": "2025-09-16T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_371",
    "userId": "user_1371",
    "userName": "Kiara Chauhan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 16.192565,
    "longitude": 81.160599,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_371_1.jpg",
      "https://example.com/videos/rpt_371_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-14T08:57:38.121590Z",
    "updatedAt": "2025-09-15T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_372",
    "userId": "user_1372",
    "userName": "Aarohi Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 14.460866,
    "longitude": 79.980323,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_372_1.jpg",
      "https://example.com/videos/rpt_372_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-12T20:57:38.121590Z",
    "updatedAt": "2025-09-13T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_373",
    "userId": "user_1373",
    "userName": "Sai Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.281784,
    "longitude": 84.893157,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_373_1.jpg",
      "https://example.com/videos/rpt_373_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-12T13:57:38.121590Z",
    "updatedAt": "2025-09-12T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_374",
    "userId": "user_1374",
    "userName": "Aarav Gupta",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.843993,
    "longitude": 69.365315,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_374_1.jpg",
      "https://example.com/videos/rpt_374_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-12T17:57:38.121590Z",
    "updatedAt": "2025-09-13T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_375",
    "userId": "user_1375",
    "userName": "Aarav Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 21.767118,
    "longitude": 72.137742,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_375_1.jpg",
      "https://example.com/videos/rpt_375_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-09T00:57:38.121590Z",
    "updatedAt": "2025-09-09T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_376",
    "userId": "user_1376",
    "userName": "Aarav Yadav",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 8.101508,
    "longitude": 77.548562,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_376_1.jpg",
      "https://example.com/videos/rpt_376_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-07T05:57:38.121590Z",
    "updatedAt": "2025-09-07T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_377",
    "userId": "user_1377",
    "userName": "Aditya Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.058564,
    "longitude": 72.883246,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_377_1.jpg",
      "https://example.com/videos/rpt_377_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-13T20:57:38.121590Z",
    "updatedAt": "2025-09-13T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_378",
    "userId": "user_1378",
    "userName": "Zara Khan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 13.105421,
    "longitude": 80.284088,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_378_1.jpg",
      "https://example.com/videos/rpt_378_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-08T13:57:38.121590Z",
    "updatedAt": "2025-09-08T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_379",
    "userId": "user_1379",
    "userName": "Meera Singh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.592366,
    "longitude": 88.374574,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_379_1.jpg",
      "https://example.com/videos/rpt_379_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-19T20:57:38.121590Z",
    "updatedAt": "2025-09-20T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_380",
    "userId": "user_1380",
    "userName": "Kiara Chowdhury",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 17.691686,
    "longitude": 83.22412,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_380_1.jpg",
      "https://example.com/videos/rpt_380_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-12T13:57:38.121590Z",
    "updatedAt": "2025-09-12T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_381",
    "userId": "user_1381",
    "userName": "Arjun Rao",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 9.92703,
    "longitude": 76.272778,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_381_1.jpg",
      "https://example.com/videos/rpt_381_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-09T19:57:38.121590Z",
    "updatedAt": "2025-09-10T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_382",
    "userId": "user_1382",
    "userName": "Sai Chauhan",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 12.891524,
    "longitude": 74.877001,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_382_1.jpg",
      "https://example.com/videos/rpt_382_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-18T01:57:38.121590Z",
    "updatedAt": "2025-09-18T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_383",
    "userId": "user_1383",
    "userName": "Meera Nair",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.825998,
    "longitude": 85.814046,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_383_1.jpg",
      "https://example.com/videos/rpt_383_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-07T07:57:38.121590Z",
    "updatedAt": "2025-09-07T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_384",
    "userId": "user_1384",
    "userName": "Krishna Menon",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 20.332338,
    "longitude": 86.591719,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_384_1.jpg",
      "https://example.com/videos/rpt_384_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-18T06:57:38.121590Z",
    "updatedAt": "2025-09-18T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_385",
    "userId": "user_1385",
    "userName": "Vivaan Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.646156,
    "longitude": 87.51909,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_385_1.jpg",
      "https://example.com/videos/rpt_385_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-11T12:57:38.121590Z",
    "updatedAt": "2025-09-11T13:57:38.121590Z",
    "verifiedBy": "official_135",
    "verifiedAt": "2025-09-11T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_386",
    "userId": "user_1386",
    "userName": "Diya Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 11.925896,
    "longitude": 79.788561,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_386_1.jpg",
      "https://example.com/videos/rpt_386_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-20T01:57:38.121590Z",
    "updatedAt": "2025-09-20T02:57:38.121590Z",
    "verifiedBy": "official_136",
    "verifiedAt": "2025-09-20T02:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_387",
    "userId": "user_1387",
    "userName": "Vihaan Nair",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.995133,
    "longitude": 82.266296,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_387_1.jpg",
      "https://example.com/videos/rpt_387_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-16T06:57:38.121590Z",
    "updatedAt": "2025-09-17T03:57:38.121590Z",
    "verifiedBy": "official_137",
    "verifiedAt": "2025-09-17T03:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_388",
    "userId": "user_1388",
    "userName": "Reyansh Reddy",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 8.787667,
    "longitude": 78.151801,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_388_1.jpg",
      "https://example.com/videos/rpt_388_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-16T03:57:38.121590Z",
    "updatedAt": "2025-09-16T07:57:38.121590Z",
    "verifiedBy": "official_138",
    "verifiedAt": "2025-09-16T07:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_389",
    "userId": "user_1389",
    "userName": "Aarav Nair",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 21.651672,
    "longitude": 69.649368,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_389_1.jpg",
      "https://example.com/videos/rpt_389_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-10T10:57:38.121590Z",
    "updatedAt": "2025-09-11T00:57:38.121590Z",
    "verifiedBy": "official_139",
    "verifiedAt": "2025-09-11T00:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_390",
    "userId": "user_1390",
    "userName": "Muhammad Gupta",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 20.929053,
    "longitude": 70.375107,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_390_1.jpg",
      "https://example.com/videos/rpt_390_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-13T21:57:38.121590Z",
    "updatedAt": "2025-09-14T12:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_391",
    "userId": "user_1391",
    "userName": "Ishaan Ghosh",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.459162,
    "longitude": 69.092739,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_391_1.jpg",
      "https://example.com/videos/rpt_391_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-07T11:57:38.121590Z",
    "updatedAt": "2025-09-08T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_392",
    "userId": "user_1392",
    "userName": "Vihaan Iyer",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.484348,
    "longitude": 70.053421,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_392_1.jpg",
      "https://example.com/videos/rpt_392_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-14T01:57:38.121590Z",
    "updatedAt": "2025-09-14T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_393",
    "userId": "user_1393",
    "userName": "Navya Chauhan",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.233661,
    "longitude": 68.988754,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_393_1.jpg",
      "https://example.com/videos/rpt_393_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-10T04:57:38.121590Z",
    "updatedAt": "2025-09-10T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_394",
    "userId": "user_1394",
    "userName": "Vivaan Gowda",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 14.83271,
    "longitude": 74.113471,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_394_1.jpg",
      "https://example.com/videos/rpt_394_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-08T21:57:38.121590Z",
    "updatedAt": "2025-09-09T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_395",
    "userId": "user_1395",
    "userName": "Navya Shetty",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 16.984633,
    "longitude": 73.335626,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_395_1.jpg",
      "https://example.com/videos/rpt_395_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-07T13:57:38.121590Z",
    "updatedAt": "2025-09-08T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_396",
    "userId": "user_1396",
    "userName": "Ananya Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 18.630375,
    "longitude": 72.870739,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_396_1.jpg",
      "https://example.com/videos/rpt_396_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-06T23:57:38.121590Z",
    "updatedAt": "2025-09-06T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_397",
    "userId": "user_1397",
    "userName": "Vihaan Shetty",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 15.3891,
    "longitude": 73.861343,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_397_1.jpg",
      "https://example.com/videos/rpt_397_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-17T22:57:38.121590Z",
    "updatedAt": "2025-09-18T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_398",
    "userId": "user_1398",
    "userName": "Aadhya Patel",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 15.490814,
    "longitude": 73.834268,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_398_1.jpg",
      "https://example.com/videos/rpt_398_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-11T03:57:38.121590Z",
    "updatedAt": "2025-09-11T09:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_399",
    "userId": "user_1399",
    "userName": "Zara Khan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.075904,
    "longitude": 88.0936,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_399_1.jpg",
      "https://example.com/videos/rpt_399_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-10T03:57:38.121590Z",
    "updatedAt": "2025-09-10T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_400",
    "userId": "user_1400",
    "userName": "Aditya Verma",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 16.162553,
    "longitude": 81.119846,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_400_1.jpg",
      "https://example.com/videos/rpt_400_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-11T10:57:38.121590Z",
    "updatedAt": "2025-09-12T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_401",
    "userId": "user_1401",
    "userName": "Navya Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 14.458547,
    "longitude": 79.962355,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_401_1.jpg",
      "https://example.com/videos/rpt_401_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-08T21:57:38.121590Z",
    "updatedAt": "2025-09-09T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_402",
    "userId": "user_1402",
    "userName": "Zara Reddy",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.263026,
    "longitude": 84.894639,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_402_1.jpg",
      "https://example.com/videos/rpt_402_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-15T23:57:38.121590Z",
    "updatedAt": "2025-09-16T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_403",
    "userId": "user_1403",
    "userName": "Reyansh Gowda",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.832731,
    "longitude": 69.337031,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_403_1.jpg",
      "https://example.com/videos/rpt_403_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-13T02:57:38.121590Z",
    "updatedAt": "2025-09-13T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_404",
    "userId": "user_1404",
    "userName": "Janhvi Reddy",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.769567,
    "longitude": 72.172659,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_404_1.jpg",
      "https://example.com/videos/rpt_404_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-19T05:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_405",
    "userId": "user_1405",
    "userName": "Meera Sharma",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 8.077566,
    "longitude": 77.53458,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_405_1.jpg",
      "https://example.com/videos/rpt_405_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-09T08:57:38.121590Z",
    "updatedAt": "2025-09-09T23:57:38.121590Z",
    "verifiedBy": "official_105",
    "verifiedAt": "2025-09-09T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_406",
    "userId": "user_1406",
    "userName": "Aadhya Shetty",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.079025,
    "longitude": 72.860829,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_406_1.jpg",
      "https://example.com/videos/rpt_406_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-09T17:57:38.121590Z",
    "updatedAt": "2025-09-09T20:57:38.121590Z",
    "verifiedBy": "official_106",
    "verifiedAt": "2025-09-09T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_407",
    "userId": "user_1407",
    "userName": "Ishaan Gupta",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 13.061947,
    "longitude": 80.247542,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_407_1.jpg",
      "https://example.com/videos/rpt_407_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-15T10:57:38.121590Z",
    "updatedAt": "2025-09-15T20:57:38.121590Z",
    "verifiedBy": "official_107",
    "verifiedAt": "2025-09-15T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_408",
    "userId": "user_1408",
    "userName": "Reyansh Rao",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.592758,
    "longitude": 88.339333,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_408_1.jpg",
      "https://example.com/videos/rpt_408_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-18T06:57:38.121590Z",
    "updatedAt": "2025-09-18T08:57:38.121590Z",
    "verifiedBy": "official_108",
    "verifiedAt": "2025-09-18T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_409",
    "userId": "user_1409",
    "userName": "Zara Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 17.6727,
    "longitude": 83.229763,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_409_1.jpg",
      "https://example.com/videos/rpt_409_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-18T04:57:38.121590Z",
    "updatedAt": "2025-09-18T17:57:38.121590Z",
    "verifiedBy": "official_109",
    "verifiedAt": "2025-09-18T17:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_410",
    "userId": "user_1410",
    "userName": "Diya Nair",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 9.954566,
    "longitude": 76.258582,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_410_1.jpg",
      "https://example.com/videos/rpt_410_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-14T14:57:38.121590Z",
    "updatedAt": "2025-09-15T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_411",
    "userId": "user_1411",
    "userName": "Sai Chowdhury",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 12.903692,
    "longitude": 74.848268,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_411_1.jpg",
      "https://example.com/videos/rpt_411_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-13T16:57:38.121590Z",
    "updatedAt": "2025-09-14T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_412",
    "userId": "user_1412",
    "userName": "Aadhya Chowdhury",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.832151,
    "longitude": 85.834471,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_412_1.jpg",
      "https://example.com/videos/rpt_412_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-07T11:57:38.121590Z",
    "updatedAt": "2025-09-07T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_413",
    "userId": "user_1413",
    "userName": "Krishna Yadav",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 20.321676,
    "longitude": 86.596847,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_413_1.jpg",
      "https://example.com/videos/rpt_413_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-11T03:57:38.121590Z",
    "updatedAt": "2025-09-11T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_414",
    "userId": "user_1414",
    "userName": "Arjun Iyer",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.642876,
    "longitude": 87.516588,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_414_1.jpg",
      "https://example.com/videos/rpt_414_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-19T10:57:38.121590Z",
    "updatedAt": "2025-09-20T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_415",
    "userId": "user_1415",
    "userName": "Ishaan Das",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 11.963678,
    "longitude": 79.81745,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_415_1.jpg",
      "https://example.com/videos/rpt_415_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-17T06:57:38.121590Z",
    "updatedAt": "2025-09-18T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_416",
    "userId": "user_1416",
    "userName": "Janhvi Rao",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 17.002198,
    "longitude": 82.239805,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_416_1.jpg",
      "https://example.com/videos/rpt_416_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-18T03:57:38.121590Z",
    "updatedAt": "2025-09-18T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_417",
    "userId": "user_1417",
    "userName": "Aarohi Ghosh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 8.759787,
    "longitude": 78.15824,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_417_1.jpg",
      "https://example.com/videos/rpt_417_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-07T01:57:38.121590Z",
    "updatedAt": "2025-09-07T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_418",
    "userId": "user_1418",
    "userName": "Aditya Khan",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 21.629725,
    "longitude": 69.651285,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_418_1.jpg",
      "https://example.com/videos/rpt_418_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-14T15:57:38.121590Z",
    "updatedAt": "2025-09-15T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_419",
    "userId": "user_1419",
    "userName": "Kiara Nair",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 20.889346,
    "longitude": 70.368481,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_419_1.jpg",
      "https://example.com/videos/rpt_419_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-15T22:57:38.121590Z",
    "updatedAt": "2025-09-16T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_420",
    "userId": "user_1420",
    "userName": "Ishaan Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.463162,
    "longitude": 69.053294,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_420_1.jpg",
      "https://example.com/videos/rpt_420_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-08T22:57:38.121590Z",
    "updatedAt": "2025-09-09T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_421",
    "userId": "user_1421",
    "userName": "Aadhya Sharma",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.4951,
    "longitude": 70.068228,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_421_1.jpg",
      "https://example.com/videos/rpt_421_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-12T04:57:38.121590Z",
    "updatedAt": "2025-09-13T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_422",
    "userId": "user_1422",
    "userName": "Reyansh Singh",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.254225,
    "longitude": 68.968031,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_422_1.jpg",
      "https://example.com/videos/rpt_422_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-07T05:57:38.121590Z",
    "updatedAt": "2025-09-08T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_423",
    "userId": "user_1423",
    "userName": "Ishaan Khan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 14.813252,
    "longitude": 74.153931,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_423_1.jpg",
      "https://example.com/videos/rpt_423_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-07T11:57:38.121590Z",
    "updatedAt": "2025-09-08T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_424",
    "userId": "user_1424",
    "userName": "Janhvi Sharma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.966074,
    "longitude": 73.321111,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_424_1.jpg",
      "https://example.com/videos/rpt_424_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-13T07:57:38.121590Z",
    "updatedAt": "2025-09-13T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_425",
    "userId": "user_1425",
    "userName": "Saanvi Iyer",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 18.631481,
    "longitude": 72.864688,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_425_1.jpg",
      "https://example.com/videos/rpt_425_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-11T14:57:38.121590Z",
    "updatedAt": "2025-09-11T15:57:38.121590Z",
    "verifiedBy": "official_125",
    "verifiedAt": "2025-09-11T15:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_426",
    "userId": "user_1426",
    "userName": "Aarohi Reddy",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 15.36525,
    "longitude": 73.828086,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_426_1.jpg",
      "https://example.com/videos/rpt_426_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-07T12:57:38.121590Z",
    "updatedAt": "2025-09-07T17:57:38.121590Z",
    "verifiedBy": "official_126",
    "verifiedAt": "2025-09-07T17:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_427",
    "userId": "user_1427",
    "userName": "Janhvi Singh",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 15.51411,
    "longitude": 73.81371,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_427_1.jpg",
      "https://example.com/videos/rpt_427_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-12T04:57:38.121590Z",
    "updatedAt": "2025-09-12T04:57:38.121590Z",
    "verifiedBy": "official_127",
    "verifiedAt": "2025-09-12T04:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_428",
    "userId": "user_1428",
    "userName": "Janhvi Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.068975,
    "longitude": 88.046903,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_428_1.jpg",
      "https://example.com/videos/rpt_428_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-06T19:57:38.121590Z",
    "updatedAt": "2025-09-06T23:57:38.121590Z",
    "verifiedBy": "official_128",
    "verifiedAt": "2025-09-06T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_429",
    "userId": "user_1429",
    "userName": "Aadhya Verma",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 16.169994,
    "longitude": 81.141117,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_429_1.jpg",
      "https://example.com/videos/rpt_429_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-11T04:57:38.121590Z",
    "updatedAt": "2025-09-11T16:57:38.121590Z",
    "verifiedBy": "official_129",
    "verifiedAt": "2025-09-11T16:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_430",
    "userId": "user_1430",
    "userName": "Ananya Pillai",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 14.436099,
    "longitude": 79.994504,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_430_1.jpg",
      "https://example.com/videos/rpt_430_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-19T03:57:38.121590Z",
    "updatedAt": "2025-09-19T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_431",
    "userId": "user_1431",
    "userName": "Ishaan Singh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 19.29825,
    "longitude": 84.896295,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_431_1.jpg",
      "https://example.com/videos/rpt_431_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-11T04:57:38.121590Z",
    "updatedAt": "2025-09-11T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_432",
    "userId": "user_1432",
    "userName": "Aarav Shetty",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.850322,
    "longitude": 69.354902,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_432_1.jpg",
      "https://example.com/videos/rpt_432_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-11T10:57:38.121590Z",
    "updatedAt": "2025-09-11T15:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_433",
    "userId": "user_1433",
    "userName": "Zara Reddy",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.78649,
    "longitude": 72.175679,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_433_1.jpg",
      "https://example.com/videos/rpt_433_1.mp4"
    ],
    "status": "rejected",
    "severity": "medium",
    "createdAt": "2025-09-15T18:57:38.121590Z",
    "updatedAt": "2025-09-16T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_434",
    "userId": "user_1434",
    "userName": "Aarohi Gupta",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 8.066918,
    "longitude": 77.559838,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_434_1.jpg",
      "https://example.com/videos/rpt_434_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-18T15:57:38.121590Z",
    "updatedAt": "2025-09-19T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_435",
    "userId": "user_1435",
    "userName": "Sai Das",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.087106,
    "longitude": 72.889086,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_435_1.jpg",
      "https://example.com/videos/rpt_435_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-16T01:57:38.121590Z",
    "updatedAt": "2025-09-16T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_436",
    "userId": "user_1436",
    "userName": "Vivaan Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 13.082498,
    "longitude": 80.274291,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_436_1.jpg",
      "https://example.com/videos/rpt_436_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-19T12:57:38.121590Z",
    "updatedAt": "2025-09-19T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_437",
    "userId": "user_1437",
    "userName": "Navya Ghosh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.588776,
    "longitude": 88.363095,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_437_1.jpg",
      "https://example.com/videos/rpt_437_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-10T03:57:38.121590Z",
    "updatedAt": "2025-09-10T08:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_438",
    "userId": "user_1438",
    "userName": "Zara Singh",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 17.688434,
    "longitude": 83.19825,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_438_1.jpg",
      "https://example.com/videos/rpt_438_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-08T17:57:38.121590Z",
    "updatedAt": "2025-09-08T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_439",
    "userId": "user_1439",
    "userName": "Arjun Chowdhury",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 9.942877,
    "longitude": 76.256423,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_439_1.jpg",
      "https://example.com/videos/rpt_439_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-08T03:57:38.121590Z",
    "updatedAt": "2025-09-09T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_440",
    "userId": "user_1440",
    "userName": "Vihaan Rao",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 12.923341,
    "longitude": 74.856471,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_440_1.jpg",
      "https://example.com/videos/rpt_440_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-07T04:57:38.121590Z",
    "updatedAt": "2025-09-07T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_441",
    "userId": "user_1441",
    "userName": "Navya Pillai",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 19.813753,
    "longitude": 85.834943,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_441_1.jpg",
      "https://example.com/videos/rpt_441_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-18T23:57:38.121590Z",
    "updatedAt": "2025-09-19T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_442",
    "userId": "user_1442",
    "userName": "Aarav Pillai",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 20.323668,
    "longitude": 86.59991,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_442_1.jpg",
      "https://example.com/videos/rpt_442_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-16T09:57:38.121590Z",
    "updatedAt": "2025-09-16T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_443",
    "userId": "user_1443",
    "userName": "Ishaan Nair",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 21.629152,
    "longitude": 87.52674,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_443_1.jpg",
      "https://example.com/videos/rpt_443_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-10T16:57:38.121590Z",
    "updatedAt": "2025-09-11T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_444",
    "userId": "user_1444",
    "userName": "Ishaan Singh",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 11.925474,
    "longitude": 79.83064,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_444_1.jpg",
      "https://example.com/videos/rpt_444_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-09T07:57:38.121590Z",
    "updatedAt": "2025-09-09T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_445",
    "userId": "user_1445",
    "userName": "Ishaan Shetty",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.977253,
    "longitude": 82.25969,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_445_1.jpg",
      "https://example.com/videos/rpt_445_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-19T15:57:38.121590Z",
    "updatedAt": "2025-09-19T19:57:38.121590Z",
    "verifiedBy": "official_145",
    "verifiedAt": "2025-09-19T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_446",
    "userId": "user_1446",
    "userName": "Meera Chauhan",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 8.770954,
    "longitude": 78.122099,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_446_1.jpg",
      "https://example.com/videos/rpt_446_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-07T09:57:38.121590Z",
    "updatedAt": "2025-09-07T19:57:38.121590Z",
    "verifiedBy": "official_146",
    "verifiedAt": "2025-09-07T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_447",
    "userId": "user_1447",
    "userName": "Ishaan Iyer",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 21.645532,
    "longitude": 69.628321,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_447_1.jpg",
      "https://example.com/videos/rpt_447_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-15T11:57:38.121590Z",
    "updatedAt": "2025-09-15T15:57:38.121590Z",
    "verifiedBy": "official_147",
    "verifiedAt": "2025-09-15T15:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_448",
    "userId": "user_1448",
    "userName": "Kiara Chowdhury",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 20.899469,
    "longitude": 70.354792,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_448_1.jpg",
      "https://example.com/videos/rpt_448_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-13T05:57:38.121590Z",
    "updatedAt": "2025-09-13T05:57:38.121590Z",
    "verifiedBy": "official_148",
    "verifiedAt": "2025-09-13T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_449",
    "userId": "user_1449",
    "userName": "Arjun Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 22.463195,
    "longitude": 69.064116,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_449_1.jpg",
      "https://example.com/videos/rpt_449_1.mp4"
    ],
    "status": "verified",
    "severity": "low",
    "createdAt": "2025-09-07T02:57:38.121590Z",
    "updatedAt": "2025-09-08T01:57:38.121590Z",
    "verifiedBy": "official_149",
    "verifiedAt": "2025-09-08T01:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_450",
    "userId": "user_1450",
    "userName": "Arjun Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.481228,
    "longitude": 70.047828,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_450_1.jpg",
      "https://example.com/videos/rpt_450_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-15T13:57:38.121590Z",
    "updatedAt": "2025-09-16T04:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_451",
    "userId": "user_1451",
    "userName": "Krishna Chowdhury",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.243615,
    "longitude": 68.982525,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_451_1.jpg",
      "https://example.com/videos/rpt_451_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-17T23:57:38.121590Z",
    "updatedAt": "2025-09-18T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_452",
    "userId": "user_1452",
    "userName": "Kiara Verma",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 14.790777,
    "longitude": 74.116155,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_452_1.jpg",
      "https://example.com/videos/rpt_452_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-14T06:57:38.121590Z",
    "updatedAt": "2025-09-14T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_453",
    "userId": "user_1453",
    "userName": "Navya Chauhan",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 17.009936,
    "longitude": 73.315659,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_453_1.jpg",
      "https://example.com/videos/rpt_453_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-10T08:57:38.121590Z",
    "updatedAt": "2025-09-10T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_454",
    "userId": "user_1454",
    "userName": "Aarohi Yadav",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 18.623545,
    "longitude": 72.848222,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_454_1.jpg",
      "https://example.com/videos/rpt_454_1.mp4"
    ],
    "status": "rejected",
    "severity": "low",
    "createdAt": "2025-09-08T00:57:38.121590Z",
    "updatedAt": "2025-09-08T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_455",
    "userId": "user_1455",
    "userName": "Ishaan Verma",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 15.362975,
    "longitude": 73.867435,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_455_1.jpg",
      "https://example.com/videos/rpt_455_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-11T18:57:38.121590Z",
    "updatedAt": "2025-09-12T06:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_456",
    "userId": "user_1456",
    "userName": "Kiara Pillai",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 15.512064,
    "longitude": 73.829997,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_456_1.jpg",
      "https://example.com/videos/rpt_456_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-13T22:57:38.121590Z",
    "updatedAt": "2025-09-14T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_457",
    "userId": "user_1457",
    "userName": "Zara Pillai",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.086829,
    "longitude": 88.068143,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_457_1.jpg",
      "https://example.com/videos/rpt_457_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-20T15:57:38.121590Z",
    "updatedAt": "2025-09-20T21:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_458",
    "userId": "user_1458",
    "userName": "Kiara Patel",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 16.210853,
    "longitude": 81.148347,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_458_1.jpg",
      "https://example.com/videos/rpt_458_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-13T19:57:38.121590Z",
    "updatedAt": "2025-09-13T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_459",
    "userId": "user_1459",
    "userName": "Zara Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 14.460305,
    "longitude": 79.990179,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_459_1.jpg",
      "https://example.com/videos/rpt_459_1.mp4"
    ],
    "status": "underReview",
    "severity": "medium",
    "createdAt": "2025-09-08T15:57:38.121590Z",
    "updatedAt": "2025-09-08T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_460",
    "userId": "user_1460",
    "userName": "Diya Pillai",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 19.262899,
    "longitude": 84.901221,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_460_1.jpg",
      "https://example.com/videos/rpt_460_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-12T15:57:38.121590Z",
    "updatedAt": "2025-09-12T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_461",
    "userId": "user_1461",
    "userName": "Meera Iyer",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 22.841946,
    "longitude": 69.352924,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_461_1.jpg",
      "https://example.com/videos/rpt_461_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-13T07:57:38.121590Z",
    "updatedAt": "2025-09-13T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_462",
    "userId": "user_1462",
    "userName": "Ishaan Mukherjee",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.74963,
    "longitude": 72.160554,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_462_1.jpg",
      "https://example.com/videos/rpt_462_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-12T14:57:38.121590Z",
    "updatedAt": "2025-09-13T07:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_463",
    "userId": "user_1463",
    "userName": "Arjun Nair",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 8.094119,
    "longitude": 77.514521,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_463_1.jpg",
      "https://example.com/videos/rpt_463_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-15T03:57:38.121590Z",
    "updatedAt": "2025-09-15T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_464",
    "userId": "user_1464",
    "userName": "Kiara Reddy",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.052047,
    "longitude": 72.882062,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_464_1.jpg",
      "https://example.com/videos/rpt_464_1.mp4"
    ],
    "status": "pending",
    "severity": "high",
    "createdAt": "2025-09-12T05:57:38.121590Z",
    "updatedAt": "2025-09-12T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_465",
    "userId": "user_1465",
    "userName": "Ananya Nair",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 13.088288,
    "longitude": 80.264375,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_465_1.jpg",
      "https://example.com/videos/rpt_465_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-14T19:57:38.121590Z",
    "updatedAt": "2025-09-15T07:57:38.121590Z",
    "verifiedBy": "official_115",
    "verifiedAt": "2025-09-15T07:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_466",
    "userId": "user_1466",
    "userName": "Kiara Das",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.56359,
    "longitude": 88.381855,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_466_1.jpg",
      "https://example.com/videos/rpt_466_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-11T11:57:38.121590Z",
    "updatedAt": "2025-09-11T23:57:38.121590Z",
    "verifiedBy": "official_116",
    "verifiedAt": "2025-09-11T23:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_467",
    "userId": "user_1467",
    "userName": "Saanvi Gupta",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 17.697012,
    "longitude": 83.220655,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_467_1.jpg",
      "https://example.com/videos/rpt_467_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-10T05:57:38.121590Z",
    "updatedAt": "2025-09-10T09:57:38.121590Z",
    "verifiedBy": "official_117",
    "verifiedAt": "2025-09-10T09:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_468",
    "userId": "user_1468",
    "userName": "Aditya Singh",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 9.925592,
    "longitude": 76.282177,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_468_1.jpg",
      "https://example.com/videos/rpt_468_1.mp4"
    ],
    "status": "verified",
    "severity": "high",
    "createdAt": "2025-09-12T09:57:38.121590Z",
    "updatedAt": "2025-09-12T19:57:38.121590Z",
    "verifiedBy": "official_118",
    "verifiedAt": "2025-09-12T19:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_469",
    "userId": "user_1469",
    "userName": "Ananya Pillai",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 12.898627,
    "longitude": 74.853266,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_469_1.jpg",
      "https://example.com/videos/rpt_469_1.mp4"
    ],
    "status": "verified",
    "severity": "critical",
    "createdAt": "2025-09-13T00:57:38.121590Z",
    "updatedAt": "2025-09-13T20:57:38.121590Z",
    "verifiedBy": "official_119",
    "verifiedAt": "2025-09-13T20:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_470",
    "userId": "user_1470",
    "userName": "Aarohi Chowdhury",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 19.798644,
    "longitude": 85.816145,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_470_1.jpg",
      "https://example.com/videos/rpt_470_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-12T09:57:38.121590Z",
    "updatedAt": "2025-09-12T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_471",
    "userId": "user_1471",
    "userName": "Vihaan Gowda",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 20.339769,
    "longitude": 86.62925,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_471_1.jpg",
      "https://example.com/videos/rpt_471_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-16T22:57:38.121590Z",
    "updatedAt": "2025-09-17T17:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_472",
    "userId": "user_1472",
    "userName": "Aadhya Khan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 21.622971,
    "longitude": 87.510157,
    "address": "Digha, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_472_1.jpg",
      "https://example.com/videos/rpt_472_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-14T16:57:38.121590Z",
    "updatedAt": "2025-09-15T11:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_473",
    "userId": "user_1473",
    "userName": "Aarav Gupta",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 11.953638,
    "longitude": 79.818603,
    "address": "Puducherry",
    "mediaUrls": [
      "https://example.com/images/rpt_473_1.jpg",
      "https://example.com/videos/rpt_473_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-10T23:57:38.121590Z",
    "updatedAt": "2025-09-11T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_474",
    "userId": "user_1474",
    "userName": "Aditya Nair",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 16.983702,
    "longitude": 82.246433,
    "address": "Kakinada, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_474_1.jpg",
      "https://example.com/videos/rpt_474_1.mp4"
    ],
    "status": "rejected",
    "severity": "critical",
    "createdAt": "2025-09-15T05:57:38.121590Z",
    "updatedAt": "2025-09-15T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_475",
    "userId": "user_1475",
    "userName": "Reyansh Iyer",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 8.778739,
    "longitude": 78.137793,
    "address": "Thoothukudi, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_475_1.jpg",
      "https://example.com/videos/rpt_475_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-12T10:57:38.121590Z",
    "updatedAt": "2025-09-13T01:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_476",
    "userId": "user_1476",
    "userName": "Reyansh Chauhan",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 21.655844,
    "longitude": 69.607154,
    "address": "Porbandar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_476_1.jpg",
      "https://example.com/videos/rpt_476_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-16T12:57:38.121590Z",
    "updatedAt": "2025-09-16T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_477",
    "userId": "user_1477",
    "userName": "Kiara Sharma",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 20.920319,
    "longitude": 70.35001,
    "address": "Veraval, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_477_1.jpg",
      "https://example.com/videos/rpt_477_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-08T04:57:38.121590Z",
    "updatedAt": "2025-09-08T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_478",
    "userId": "user_1478",
    "userName": "Krishna Yadav",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 22.481392,
    "longitude": 69.068336,
    "address": "Okha, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_478_1.jpg",
      "https://example.com/videos/rpt_478_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-07T12:57:38.121590Z",
    "updatedAt": "2025-09-07T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_479",
    "userId": "user_1479",
    "userName": "Zara Chauhan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.448478,
    "longitude": 70.034626,
    "address": "Jamnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_479_1.jpg",
      "https://example.com/videos/rpt_479_1.mp4"
    ],
    "status": "underReview",
    "severity": "low",
    "createdAt": "2025-09-08T10:57:38.121590Z",
    "updatedAt": "2025-09-08T10:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_480",
    "userId": "user_1480",
    "userName": "Aadhya Pillai",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 22.23935,
    "longitude": 68.978556,
    "address": "Dwarka, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_480_1.jpg",
      "https://example.com/videos/rpt_480_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-14T02:57:38.121590Z",
    "updatedAt": "2025-09-14T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_481",
    "userId": "user_1481",
    "userName": "Krishna Nair",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 14.796931,
    "longitude": 74.11361,
    "address": "Karwar, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_481_1.jpg",
      "https://example.com/videos/rpt_481_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-18T06:57:38.121590Z",
    "updatedAt": "2025-09-18T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_482",
    "userId": "user_1482",
    "userName": "Arjun Rao",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.006144,
    "longitude": 73.306776,
    "address": "Ratnagiri, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_482_1.jpg",
      "https://example.com/videos/rpt_482_1.mp4"
    ],
    "status": "pending",
    "severity": "low",
    "createdAt": "2025-09-16T04:57:38.121590Z",
    "updatedAt": "2025-09-16T23:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "low"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_483",
    "userId": "user_1483",
    "userName": "Ananya Patel",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 18.636894,
    "longitude": 72.888271,
    "address": "Alibag, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_483_1.jpg",
      "https://example.com/videos/rpt_483_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-10T09:57:38.121590Z",
    "updatedAt": "2025-09-11T02:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_484",
    "userId": "user_1484",
    "userName": "Ishaan Verma",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 15.41035,
    "longitude": 73.851028,
    "address": "Vasco da Gama, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_484_1.jpg",
      "https://example.com/videos/rpt_484_1.mp4"
    ],
    "status": "pending",
    "severity": "medium",
    "createdAt": "2025-09-16T03:57:38.121590Z",
    "updatedAt": "2025-09-16T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_485",
    "userId": "user_1485",
    "userName": "Ishaan Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 15.469162,
    "longitude": 73.814988,
    "address": "Panaji, Goa",
    "mediaUrls": [
      "https://example.com/images/rpt_485_1.jpg",
      "https://example.com/videos/rpt_485_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-13T10:57:38.121590Z",
    "updatedAt": "2025-09-14T07:57:38.121590Z",
    "verifiedBy": "official_135",
    "verifiedAt": "2025-09-14T07:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_486",
    "userId": "user_1486",
    "userName": "Janhvi Gupta",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 22.081726,
    "longitude": 88.087072,
    "address": "Haldia, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_486_1.jpg",
      "https://example.com/videos/rpt_486_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-13T09:57:38.121590Z",
    "updatedAt": "2025-09-13T13:57:38.121590Z",
    "verifiedBy": "official_136",
    "verifiedAt": "2025-09-13T13:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_487",
    "userId": "user_1487",
    "userName": "Muhammad Mukherjee",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 16.186671,
    "longitude": 81.115392,
    "address": "Machilipatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_487_1.jpg",
      "https://example.com/videos/rpt_487_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-17T02:57:38.121590Z",
    "updatedAt": "2025-09-17T08:57:38.121590Z",
    "verifiedBy": "official_137",
    "verifiedAt": "2025-09-17T08:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_488",
    "userId": "user_1488",
    "userName": "Saanvi Verma",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 14.463941,
    "longitude": 79.997839,
    "address": "Nellore, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_488_1.jpg",
      "https://example.com/videos/rpt_488_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-19T06:57:38.121590Z",
    "updatedAt": "2025-09-20T05:57:38.121590Z",
    "verifiedBy": "official_138",
    "verifiedAt": "2025-09-20T05:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_489",
    "userId": "user_1489",
    "userName": "Saanvi Das",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 19.292424,
    "longitude": 84.908889,
    "address": "Gopalpur, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_489_1.jpg",
      "https://example.com/videos/rpt_489_1.mp4"
    ],
    "status": "verified",
    "severity": "medium",
    "createdAt": "2025-09-07T19:57:38.121590Z",
    "updatedAt": "2025-09-08T15:57:38.121590Z",
    "verifiedBy": "official_139",
    "verifiedAt": "2025-09-08T15:57:38.121590Z",
    "verificationNotes": "Verified by coastal authority",
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "medium"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_490",
    "userId": "user_1490",
    "userName": "Janhvi Gowda",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 22.852126,
    "longitude": 69.358259,
    "address": "Mandvi, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_490_1.jpg",
      "https://example.com/videos/rpt_490_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-18T05:57:38.121590Z",
    "updatedAt": "2025-09-18T19:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_491",
    "userId": "user_1491",
    "userName": "Saanvi Iyer",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 21.779612,
    "longitude": 72.133918,
    "address": "Bhavnagar, Gujarat",
    "mediaUrls": [
      "https://example.com/images/rpt_491_1.jpg",
      "https://example.com/videos/rpt_491_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-19T06:57:38.121590Z",
    "updatedAt": "2025-09-20T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_492",
    "userId": "user_1492",
    "userName": "Vivaan Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 8.066287,
    "longitude": 77.563415,
    "address": "Kanyakumari, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_492_1.jpg",
      "https://example.com/videos/rpt_492_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-15T08:57:38.121590Z",
    "updatedAt": "2025-09-15T20:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_493",
    "userId": "user_1493",
    "userName": "Aditya Khan",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 19.058108,
    "longitude": 72.876522,
    "address": "Mumbai, Maharashtra",
    "mediaUrls": [
      "https://example.com/images/rpt_493_1.jpg",
      "https://example.com/videos/rpt_493_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-14T13:57:38.121590Z",
    "updatedAt": "2025-09-15T05:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_494",
    "userId": "user_1494",
    "userName": "Arjun Chowdhury",
    "hazardType": "abnormalTides",
    "title": "Abnormal tides reported",
    "description": "Unusual tide patterns observed by local authorities and fishermen.",
    "latitude": 13.060647,
    "longitude": 80.24899,
    "address": "Chennai, Tamil Nadu",
    "mediaUrls": [
      "https://example.com/images/rpt_494_1.jpg",
      "https://example.com/videos/rpt_494_1.mp4"
    ],
    "status": "rejected",
    "severity": "high",
    "createdAt": "2025-09-10T22:57:38.121590Z",
    "updatedAt": "2025-09-11T03:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "abnormalTides",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_495",
    "userId": "user_1495",
    "userName": "Navya Mukherjee",
    "hazardType": "coastalErosion",
    "title": "Coastal erosion visible",
    "description": "Visible shoreline retreat and sand loss reported.",
    "latitude": 22.557669,
    "longitude": 88.361588,
    "address": "Kolkata, West Bengal",
    "mediaUrls": [
      "https://example.com/images/rpt_495_1.jpg",
      "https://example.com/videos/rpt_495_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-17T05:57:38.121590Z",
    "updatedAt": "2025-09-17T13:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalErosion",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_496",
    "userId": "user_1496",
    "userName": "Kiara Menon",
    "hazardType": "other",
    "title": "Other coastal hazard reported",
    "description": "Citizen-reported coastal hazard; verification pending.",
    "latitude": 17.683768,
    "longitude": 83.210214,
    "address": "Visakhapatnam, Andhra Pradesh",
    "mediaUrls": [
      "https://example.com/images/rpt_496_1.jpg",
      "https://example.com/videos/rpt_496_1.mp4"
    ],
    "status": "underReview",
    "severity": "high",
    "createdAt": "2025-09-07T04:57:38.121590Z",
    "updatedAt": "2025-09-07T16:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "other",
        "high"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_497",
    "userId": "user_1497",
    "userName": "Meera Nair",
    "hazardType": "tsunami",
    "title": "Tsunami warning issued",
    "description": "Authorities have issued an advisory for potential tsunami activity.",
    "latitude": 9.940667,
    "longitude": 76.259076,
    "address": "Kochi, Kerala",
    "mediaUrls": [
      "https://example.com/images/rpt_497_1.jpg",
      "https://example.com/videos/rpt_497_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-16T21:57:38.121590Z",
    "updatedAt": "2025-09-16T22:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "tsunami",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_498",
    "userId": "user_1498",
    "userName": "Kiara Ghosh",
    "hazardType": "stormSurge",
    "title": "Storm surge risk along coast",
    "description": "Strong winds and rising sea levels could cause storm surge impacts.",
    "latitude": 12.930837,
    "longitude": 74.872496,
    "address": "Mangalore, Karnataka",
    "mediaUrls": [
      "https://example.com/images/rpt_498_1.jpg",
      "https://example.com/videos/rpt_498_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-08T02:57:38.121590Z",
    "updatedAt": "2025-09-08T18:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "stormSurge",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_499",
    "userId": "user_1499",
    "userName": "Aditya Khan",
    "hazardType": "highWaves",
    "title": "High waves observed near shore",
    "description": "Waves reaching dangerous heights; avoid swimming and boating.",
    "latitude": 19.834868,
    "longitude": 85.8339,
    "address": "Puri, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_499_1.jpg",
      "https://example.com/videos/rpt_499_1.mp4"
    ],
    "status": "underReview",
    "severity": "critical",
    "createdAt": "2025-09-09T02:57:38.121590Z",
    "updatedAt": "2025-09-09T14:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "highWaves",
        "critical"
      ]
    },
    "isOffline": false
  },
  {
    "id": "rpt_500",
    "userId": "user_1500",
    "userName": "Muhammad Gupta",
    "hazardType": "coastalFlooding",
    "title": "Coastal flooding in low-lying areas",
    "description": "Water level rising in residential areas near the coast.",
    "latitude": 20.29864,
    "longitude": 86.597162,
    "address": "Paradip, Odisha",
    "mediaUrls": [
      "https://example.com/images/rpt_500_1.jpg",
      "https://example.com/videos/rpt_500_1.mp4"
    ],
    "status": "pending",
    "severity": "critical",
    "createdAt": "2025-09-10T01:57:38.121590Z",
    "updatedAt": "2025-09-11T00:57:38.121590Z",
    "verifiedBy": null,
    "verifiedAt": null,
    "verificationNotes": null,
    "metadata": {
      "source": "mobile",
      "tags": [
        "coastalFlooding",
        "critical"
      ]
    },
    "isOffline": false
  }
];

// GET /api/reports
app.get("/api/reports", (req, res) => {
  // Optional: support query params like status=verified, severity=high, bbox=minLat,minLng,maxLat,maxLng, etc.
  res.json(reports);
});

// GET /api/reports/:id
app.get("/api/reports/:id", (req, res) => {
  const r = reports.find(x => x.id === req.params.id);
  if (!r) return res.status(404).json({ error: "Not found" });
  res.json(r);
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
