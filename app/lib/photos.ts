// Photos demo — Unsplash, sélection éditoriale sombre & beauté.
// À remplacer par les vraies photos de Rachel pour la mise en prod.

const u = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const photos = {
  hero: u("photo-1522337360788-8b13dee7a37e", 900),
  portraitRachel: u("photo-1494790108377-be9c29b29330", 900),
  manifeste: u("photo-1531746020798-e6953c6e8e04", 1100),

  signatureBoudoir: u("photo-1485178575877-1a13bf489dfe", 1200),
  signatureAtelier: u("photo-1487412947147-5cebf100ffc2", 1200),

  // Editorial gallery
  g1: u("photo-1503104834685-7205e8607eb9", 900),
  g2: u("photo-1492106087820-71f1a00d2b11", 900),
  g3: u("photo-1517841905240-472988babdf9", 700),
  g4: u("photo-1488426862026-3ee34a7d66df", 700),
  g5: u("photo-1503342394128-c104d54dba01", 900),
  g6: u("photo-1502823403499-6ccfcf4fb453", 900),
  g7: u("photo-1508214751196-bcfd4ca60f91", 700),
  g8: u("photo-1541823709867-1b206113eafd", 700),

  // Boutique
  bRitual: u("photo-1596704017254-9b121068fb31", 900),
  bBoudoir: u("photo-1488751045188-3c55bbf9a3fa", 900),
  bCorpo: u("photo-1532074205216-d0e1f4b87368", 900),
  bAtelier: u("photo-1503342217505-b0a15ec3261c", 900),
  bSignature: u("photo-1570554886111-e80fcca6a029", 900),
};
