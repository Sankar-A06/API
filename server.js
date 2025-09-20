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
    id: "rpt_123",
    userId: "user_001",
    userName: "John Doe",
    hazardType: "highWaves",
    title: "High waves at Marina Beach",
    description: "Waves reaching 3-4 meters height",
    latitude: 13.0475,
    longitude: 80.2837,
    address: "Marina Beach, Chennai",
    mediaUrls: [
      "https://example.com/img1.jpg",
      "https://example.com/vid1.mp4"
    ],
    status: "verified",
    severity: "high",
    createdAt: "2025-09-20T08:00:00.000Z",
    updatedAt: "2025-09-20T10:00:00.000Z",
    verifiedBy: "official_42",
    verifiedAt: "2025-09-20T09:30:00.000Z",
    verificationNotes: "Confirmed by coastal authority",
    metadata: { source: "mobile", tags: ["south", "beach"] },
    isOffline: false
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