
export type Product = {
  id: number;
  reference: string;
  libelle: string;
  estDuJour: boolean;
  prix: number;
  quantiteStock: number;
//   description: string;
};

export async function fetchProductOfTheDay(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/produit/duJour`
    );
    if (response.status != 200) {
      return [];
    }
    const products = (await response.json()) as Product[];
    return products;
  } catch (err) {
    console.log(err);
    return [];
  }
}