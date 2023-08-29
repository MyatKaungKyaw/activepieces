
import { createPiece, PieceAuth } from "@activepieces/pieces-framework";

export const savvycal = createPiece({
  displayName: "Savvycal",
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.7.1',
  logoUrl: "https://cdn.activepieces.com/pieces/savvycal.png",
  authors: [],
  actions: [],
  triggers: [],
});
