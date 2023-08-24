import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token :"skrUFzP8UDv1fCiIXRalPiAqr9lrXNXTMKu3hUMXe0t5OdY7ipvk0xoKm6O8jwHFxAmonn2nGotgxz9ilVcFOBvcvteoBnT9WWgZ0kZiF7VWvOnHTays2sG0DNRTxuICQT98HsFfyRlSYn8wi1pWzvR2eZhoPTHiQwNX8RtMGL7Q0F91sRDi"
})
