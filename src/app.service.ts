export class AppService {
    public async getProduct(): Promise<any> {
        const response = await fetch('http//localhost:8000/produits');
        return await response.json();
    }
}