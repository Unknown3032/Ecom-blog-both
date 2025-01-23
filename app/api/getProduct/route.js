export const dynamic = 'force-dynamic' // defaults to force-static
import { NextResponse } from 'next/server'

import connectDB from '@/middleware/ConnectDb';
import Product from '@/models/Product';





export async function POST(req) {
    // dbconnection 
    connectDB();

    // variables
    let data;
    let status;


    // request.body
    const { key, cat, subCat, sortedAs } = await req.json()

    if (key) {
        if (key == 'new') {
            await Product.find().sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'best') {
            await Product.find().sort({ "product_info.sales": -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-mug') {
            await Product.find({ "product_info.subCategory": "mug" }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-poster') {
            await Product.find({ "product_info.subCategory": "poster" }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }


            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

        if (key == 'new-clothes') {
            if (sortedAs) {
                if (sortedAs == 'low-high') {
                    await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.price": 1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

                if (sortedAs == 'high-low') {
                    await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.price": -1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

                if (sortedAs == 'best') {
                    await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.sales": -1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

            }
            else {
                await Product.find({ "product_info.category": "clothes" }).sort({ _id: -1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }


                }).catch((e) => {
                    data = { "error": e.message }
                    status = 500
                    console.error(e.message); // "oh, no!"
                })
            }
        }

        if (key == 'new-accessories') {
            if (sortedAs) {
                if (sortedAs == 'low-high') {
                    await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.price": 1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

                if (sortedAs == 'high-low') {
                    await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.price": -1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

                if (sortedAs == 'best') {
                    await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.sales": -1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

            }
            else {
                await Product.find({ "product_info.category": "accessories" }).sort({ _id: -1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }


                }).catch((e) => {
                    data = { "error": e.message }
                    status = 500
                    console.error(e.message); // "oh, no!"
                })
            }
        }

        if (key == 'best-accessories') {
            if (sortedAs && sortedAs != 'best') {
                if (sortedAs == 'low-high') {
                    await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.price": 1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

                if (sortedAs == 'high-low') {
                    await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.price": -1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }


            }

            else {
                await Product.find({ "product_info.category": "accessories" }).sort({ "product_info.sales": -1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }


                }).catch((e) => {
                    data = { "error": e.message }
                    status = 500
                    console.error(e.message); // "oh, no!"
                })
            }
        }

        if (key == 'best-clothes') {

            if (sortedAs && sortedAs != 'best') {
                if (sortedAs == 'low-high') {
                    await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.price": 1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }

                if (sortedAs == 'high-low') {
                    await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.price": -1 }).then(async (product) => {
                        // console.log(product);

                        if (product?.length) {
                            // console.log(product);
                            data = { product }
                            status = 200
                            return NextResponse.json({ data }, { status })
                        }
                        else {
                            data = { "error": "some thing went wrong!" }
                            status = 404
                            return NextResponse.json({ data }, { status })
                        }


                    }).catch((e) => {
                        data = { "error": e.message }
                        status = 500
                        console.error(e.message); // "oh, no!"
                    })
                }


            }
            else {
                await Product.find({ "product_info.category": "clothes" }).sort({ "product_info.sales": -1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }


                }).catch((e) => {
                    data = { "error": e.message }
                    status = 500
                    console.error(e.message); // "oh, no!"
                })
            }
        }
    }

    else if (cat && subCat) {
        if (sortedAs) {
            if (sortedAs == 'best') {
                await Product.find({ "product_info.category": cat, "product_info.subCategory": subCat }).sort({ "product_info.sales": -1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }
                })
            }

            if (sortedAs == 'low-high') {
                await Product.find({ "product_info.category": cat, "product_info.subCategory": subCat }).sort({ "product_info.price": 1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }


                })
            }

            if (sortedAs == 'high-low') {
                await Product.find({ "product_info.category": cat, "product_info.subCategory": subCat }).sort({ "product_info.price": -1 }).then(async (product) => {
                    // console.log(product);

                    if (product?.length) {
                        // console.log(product);
                        data = { product }
                        status = 200
                        return NextResponse.json({ data }, { status })
                    }
                    else {
                        data = { "error": "some thing went wrong!" }
                        status = 404
                        return NextResponse.json({ data }, { status })
                    }


                })
            }

        }

        else {
            await Product.find({ "product_info.category": cat, "product_info.subCategory": subCat }).sort({ _id: -1 }).then(async (product) => {
                // console.log(product);

                if (product?.length) {
                    // console.log(product);
                    data = { product }
                    status = 200
                    return NextResponse.json({ data }, { status })
                }
                else {
                    data = { "error": "some thing went wrong!" }
                    status = 404
                    return NextResponse.json({ data }, { status })
                }



            }).catch((e) => {
                data = { "error": e.message }
                status = 500
                console.error(e.message); // "oh, no!"
            })
        }

    }


    else {
        data = { "error": "some thing went wrong!" }
        status = 500
        return NextResponse.json({ data }, { status })
    }





    return NextResponse.json({ data }, { status })
}