const API_ENDPOINT = "https://api.noroff.dev/api/v1/online-shop";

export async function getProducts() {

    const res = await fetch(API_ENDPOINT);

    if (res.ok) {
        return await res.json();
    }
    else {
        console.log(await res.text());
        return null;
    }


}

export async function getProduct(productId) {

    const res = await fetch(API_ENDPOINT + `/${productId}`);

    if (res.ok) {
        return await res.json();
    }
    else {
        console.error(await res.text());
        return null;
    }

}