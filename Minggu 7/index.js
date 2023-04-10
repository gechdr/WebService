// 04b905456b1a9fc40e5efc0ede68f1a4

//npm install axios
const express = require("express");
const app = express();
const axios = require("axios").default;

app.use(express.urlencoded({ extended: true }));

app.get("/tes", async function (req, res) {
	// try {
	//     // const hasil = (await axios.get("https://api.thecatapi.com/v1/images/search")).data;
	//     // console.log(hasil);
	//     const payload = {
	//         "content": "https://tenor.com/view/hammaya-relaxed-relax-mr-bean-gif-gif-18455676",
	//         "username": "Bukan Bot",
	//         "avatar_url": ""
	//     };
	//     const hasil = await axios.post("https://discord.com/api/webhooks/1083556872067493969/yjhBAjn1GUzglKksfV7o9ZB_Kka3I-S4cg4xbCZq1khTNh3zn9-L167-utpfgKyOWdek", {
	//         payload_json: JSON.stringify(payload)
	//     });
	//     console.log(hasil);
	//     return res.status(200).send(hasil.data[0].url)
	// }
	// catch (err) {
	//     console.log(err);
	//     return res.status(500).send(err);
	// }
	// const hasil = await axios.get("https://api.rajaongkir.com/starter/province", {
	//     headers:{
	//         key: "04b905456b1a9fc40e5efc0ede68f1a4"
	//     }
	// });
	// const hasil = await axios.post("https://api.rajaongkir.com/starter/cost",
	// {
	//         //Body disini
	// },
	// {
	//     headers:{
	//         key: "04b905456b1a9fc40e5efc0ede68f1a4"
	//     }
	// });
	//1. Buat potongan program yang mengembalikan id provinsi dari provinsi yang ditulis di variable provinsi
	// const provinsi = "Jawa Timur";
	// let provinsiId = -1;
	// const hasil = await axios.get("https://api.rajaongkir.com/starter/province", {
	//     headers:{
	//         key: "04b905456b1a9fc40e5efc0ede68f1a4"
	//     }
	// });
	// let temp = hasil.data;
	// let result = temp.rajaongkir.results;
	// for (let i = 0; i < result.length; i++) {
	//     const temp = result[i];
	//     let province = temp.province;
	//     let province_id = temp.province_id;
	//     if (province == provinsi) {
	//         provinsiId = province_id;
	//         break;
	//     }
	// }
	// console.log(provinsiId);
	// return res.status(200).send({
	//     provinsiId: provinsiId
	// });
	//2. cari harga ongkir barang 5 kg dari Denpasar ke Surabaya menggunakan JNE. Format outputnya:
	// [
	//   {
	//     service: "OKE",
	//     description: "Ongkos Kirim Ekonomis",
	//     value: 38000,
	//     etd: "4-5",
	//   },
	//   {
	//     service: "REG",
	//     description: "Layanan Reguler",
	//     value: 44000,
	//     etd: "2-3",
	//   },
	//   {
	//     service: "YES",
	//     description: "Yakin Esok Sampai",
	//     value: 98000,
	//     etd: "1-1",
	//   },
	// ];
	// let {origin,destination,weight,courier} = req.query;
	// const hasil = await axios.get("https://api.rajaongkir.com/starter/city",
	// {
	//     headers:{
	//         key: "04b905456b1a9fc40e5efc0ede68f1a4"
	//     }
	// });
	// let temp = hasil.data;
	// let result = temp.rajaongkir.results;
	// let cityID = -1;
	// // let origin = "Denpasar";
	// // let destination = "Surabaya";
	// let originID;
	// let destinationID;
	// let results = [];
	// for (let i = 0; i < result.length; i++) {
	//     const temp = result[i];
	//     let city_name = temp.city_name;
	//     let city_id = temp.city_id;
	//     if (city_name == origin) {
	//         originID = city_id.toString();
	//     } else if (city_name == destination) {
	//         destinationID = city_id.toString();
	//     }
	// }
	// // return res.send(results);
	// // Denpasar = 114
	// // Surabaya = 444
	// // console.log(originID + "-" + destinationID);
	// // return res.send("OK");
	// const hasil2 = await axios.post("https://api.rajaongkir.com/starter/cost",
	// {
	//     origin: originID,
	//     destination: destinationID,
	//     weight: weight,
	//     courier: courier
	// },
	// {
	//     headers:{
	//         key: "04b905456b1a9fc40e5efc0ede68f1a4"
	//     }
	// });
	// let temp2 = hasil2.data;
	// let result2 = temp2.rajaongkir.results;
	// let costs;
	// for (let j = 0; j < result2.length; j++) {
	//     const temp3 = result2[j];
	//     let cost = temp3.costs;
	//     costs = cost;
	// }
	// console.log("OK");
	// return res.status(200).send(costs);
});

//latihan: buat endpoint untuk simulasi beli barang pproduct olshop
const { Sequelize, sequelize, Product, Cart } = require("./olshop");
//endpoint 1: tambah barang ke cart. Parameter id barang (1, 2, atau 3) dan jumlah yang dibeli. Return isi cart sekarang. Kalau id barang bukan 1, 2, atau 3, cart tidak perlu berubah isinya.
//contoh output (inputnya id 2, jumlah 2):
// [
//     {
//         "product_name": "Instant Ramen",
//         "product_weight": 100,
//         "product_price": 1000,
//         "amount": 3
//     },
//     {
//         "product_name": "Beef",
//         "product_weight": 1000,
//         "product_price": 75000,
//         "amount": 2
//     },
//     {
//         "product_name": "Rice",
//         "product_weight": 10000,
//         "product_price": 50000,
//         "amount": 1
//     },
//     {
//         "product_name": "Beef",
//         "product_weight": 1000,
//         "product_price": 75000,
//         "amount": 2
//     }
// ]

app.get("/no3", async (req, res) => {
	let { id, jumlah } = req.query;

	try {
		carts = await Cart.create({
			ProductId: id,
			amount: jumlah,
		});
	} catch (error) {
		return res.status(400).send("Error:");
	}

	let cart = await Cart.findAll();
	let products = [];
	for (let i = 0; i < cart.length; i++) {
		const tempCart = cart[i];
		let product_id = tempCart.ProductId;
		let amount = tempCart.amount;

		let product = await Product.findByPk(product_id);
		products.push({
			product_name: product.name,
			product_weight: product.weight,
			product_price: product.price,
			amount: amount,
		});
	}

	return res.status(200).send(products);
});

//endpoint 2: lihat opsi pengiriman yang product dan harga masing2. Parameter yang diminta productlah id kota tujuan pengiriman (id mengikuti id rajaongkir). Asumsikan kota asal pengiriman (tempat olshop berproduct) productlah Surabaya. Asumsikan kurir yang dipakai JNE. Berat barang sesuai dengan total_weightal berat barang di cart
//contoh output (inputnya 114):
// [
//     {
//         "service": "OKE",
//         "description": "Ongkos Kirim Ekonomis",
//         "price": 216000,
//         "etd": "2-3"
//     },
//     {
//         "service": "REG",
//         "description": "Layanan Reguler",
//         "price": 252000,
//         "etd": "1-2"
//     },
//     {
//         "service": "YES",
//         "description": "Yakin Esok Sampai",
//         "price": 456000,
//         "etd": "1-1"
//     }
// ]

app.get("/no4", async (req, res) => {
	let { destination_id } = req.query;
	let jumlah = await Cart.findAll();
	let total_weight = 0;
	for (let i = 0; i < jumlah.length; i++) {
		let product = await Product.findByPk(jumlah[i].ProductId);
		total_weight += jumlah[i].amount * product.weight;
	}
	const hasil1 = await axios.post(
		"https://api.rajaongkir.com/starter/cost",
		{
			origin: 444,
			destination: destination_id,
			weight: total_weight,
			courier: "jne",
		},
		{
			headers: {
				key: "04b905456b1a9fc40e5efc0ede68f1a4",
				"content-type": "application/x-www-form-urlencoded",
			},
		}
	);
	result = [];
	for (let i = 0; i < hasil1.data.rajaongkir.results[0].costs.length; i++) {
		result.push({
			service: hasil1.data.rajaongkir.results[0].costs[i].service,
			description: hasil1.data.rajaongkir.results[0].costs[i].description,
			value: hasil1.data.rajaongkir.results[0].costs[i].cost[0].value,
			etd: hasil1.data.rajaongkir.results[0].costs[i].cost[0].etd,
		});
	}
	return res.send(result);
});

//endpoint 3: checkout. Cetak daftar belanjaan, total_weightal harga belanjaan, ongkir, total_weightal biaya yang harus dibayar, dan estimasi kapan paket datang (dalam hari). Parameter yang diminta productlah id kota tujuan dan nama service JNE yang dipilih (biasanya "OKE", "REG", atau "YES"). Kalau service tidak ditemukan, error 400.
//contoh output (inputnya id 114, service "REG"):
// {
//     "shopping_list": [
//         {
//             "product_name": "Instant Ramen",
//             "product_weight": 100,
//             "product_price": 1000,
//             "amount": 3
//         },
//         {
//             "product_name": "Beef",
//             "product_weight": 1000,
//             "product_price": 75000,
//             "amount": 2
//         },
//         {
//             "product_name": "Rice",
//             "product_weight": 10000,
//             "product_price": 50000,
//             "amount": 1
//         }
//     ],
//     "shopping_price": 203000,
//     "delivery_fee": 252000,
//     "total_weightal_price": 455000,
//     "etd": "1-2"
// }

app.get("/no5", async (req, res) => {
	let { destination_id, service } = req.query;
	let jumlah = await Cart.findAll();
	shopping_list = [];
	for (let i = 0; i < jumlah.length; i++) {
		let find = await Product.findByPk(jumlah[i].ProductId);
		shopping_list.push({
			product_name: find.name,
			product_weight: find.weight,
			product_price: find.price,
			amount: jumlah[i].amount,
		});
	}
	let total_weight = 0;
	let harga = 0;
	for (let i = 0; i < jumlah.length; i++) {
		let product = await Product.findByPk(jumlah[i].ProductId);
		total_weight += jumlah[i].amount * product.weight;
		harga += jumlah[i].amount * product.price;
	}

	const hasil1 = await axios.post(
		"https://api.rajaongkir.com/starter/cost",
		{
			origin: 444,
			destination: destination_id,
			weight: total_weight,
			courier: "jne",
		},
		{
			headers: {
				key: "04b905456b1a9fc40e5efc0ede68f1a4",
				"content-type": "application/x-www-form-urlencoded",
			},
		}
	);
	harga1 = 0;
	etd = "";
	for (let i = 0; i < hasil1.data.rajaongkir.results[0].costs.length; i++) {
		if (hasil1.data.rajaongkir.results[0].costs[i].service === service) {
			harga1 = hasil1.data.rajaongkir.results[0].costs[i].cost[0].value;
			etd = hasil1.data.rajaongkir.results[0].costs[i].cost[0].etd;
		}
	}
	return res.send({
		shopping_list,
		shopping_price: harga,
		delivery_fee: harga1,
		total_weightal_price: harga1 + harga,
		etd: etd,
	});
});

const port = 3000;
app.listen(port, function () {
	console.log(`listening on port ${port}`);
});
