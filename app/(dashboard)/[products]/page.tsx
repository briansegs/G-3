import Link from "next/link";

const data = [
    {
        name: "item1",
        path: "/01"
    },
    {
        name: "item2",
        path: "/02"
    },
    {
        name: "item3",
        path: "/03"
    },
    {
        name: "item4",
        path: "/04"
    }
]

export default function Products({ params }) {
    return (
      <main>
        <section className="flex justify-between items-center p-40">
          {data.map((item) => (
            <div className="">
                <Link href={`/${params.products}${item.path}`}>
                    {item.name}
                </Link>
            </div>
          ))}
        </section>
      </main>
    );
  }
  