interface Sector {
  id: number;
  name: string;
  description: string;
}

interface SectorDetails {
  id: number;
  name: string;
  description: string;
  companies: {
    id: number;
    name: string;
    stock_price: number;
    description: string;
    sectorId: number;
  }[];
}

interface SectorState {
  sectors: Sector[];
  selectedSector: SectorDetails;
}

export type {
  Sector,
  SectorDetails,
  SectorState,
};
