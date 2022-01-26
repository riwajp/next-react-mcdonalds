import { Row, Col } from "antd";

const about = () => {
  const features = [
    {
      title: "Commitment to Quality",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/2_Pub_Commitment_574x384.jpg?$Publication_Two_Column_Desktop$",
      desc: "We're dedicated to improving the way we prepare our quality food and the ingredients that go into it.",
    },
    {
      title: "What's in Your Food",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/2_Pub_Whats_In_Your_Food_574x384.jpg?$Publication_Two_Column_Desktop$",
      desc: "Find out what makes our ingredients special.",
    },
    {
      title: "Our Food Philosophy",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/about-food_philosophy_pub-2-col_1110x740.jpg?$Publication_Two_Column_Desktop$",
      desc: "We’re passionate about our food. That’s why we’re committed to always evolving what matters to you.",
    },
    {
      title: "Nutrition Calculator",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/TwoPub_Desktop_NutritionCalculator_1110x740.jpg?$Publication_Two_Column_Desktop$",
      desc: "Our nutrition calculator has the McDonald’s menu nutrition information you’re seeking. Learn more about your favorite meals.",
    },
    {
      title: "Our Food Experts",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/Our_Food_Experts_2-col_1110x740.jpg?$Publication_Two_Column_Desktop$",
      desc: "From our chefs, to our dieticians and suppliers, McDonald’s food experts care deeply about the food you eat.",
    },
    {
      title: "Fresh Beef",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/2Pub_QPC_1110x740.jpg?$Publication_Two_Column_Desktop$",
      desc: "Our Quarter Pounder®* patty is made with 100% fresh beef and cooked right when you order. It’s hot and deliciously juicy and full of flavor.",
    },
    {
      title: "Happy Meal® Nutrition",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/2_Pub_Happy_Meal_574x384.jpg?$Publication_Two_Column_Desktop$",
      desc: "When your kids enjoy a meal that’s delicious and balanced, you’ll enjoy it too.",
    },
    {
      title: "Commitment to Quality",
      image:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/about-our-food/Variety_2Col_1110x740_Desktop.jpg?$Publication_Two_Column_Desktop$",
      desc: "When it comes to quality options, we’ve got you covered.",
    },
  ];
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0d0d0d" }}>
      <div
        className="text-white font-bold pt-10"
        style={{ fontSize: 40, textAlign: "center" }}
      >
        ABOUT OUR FOOD
      </div>
      <img
        src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/hero/About_Our_Food_Hero_1260x560_Desktop.jpg?$Hero_Desktop$"
        className="pr-2 pl-2 md:pr-32 md:pl-32 max-w-full mt-8"
        style={{}}
      />
      <div className="pl-2 md:pl-32 mt-16">
        <div className="font-bold text-white " style={{ fontSize: 34 }}>
          {" "}
          We’re Passionate About Our Food
        </div>
        <div
          className="text-white mt-4"
          style={{ fontSize: 18, fontWeight: 200 }}
        >
          From adding more balanced options to our Happy Meal®, to serving up
          fresh beef Quarter Pounder® burgers that are cooked when you order,
          we’re always finding ways to show our commitment to our customers and
          our food.{" "}
        </div>
      </div>

      <Row className="pl-2 pr-2 md:pl-8 md:pr-8 lg:pl-16 lg:pr-16 pt-16 pb-32">
        {features.map((f) => (
          <Col lg={12} md={12} sm={12} xs={24} className="mt-16">
            <img src={f.image} className="max-w-full pl-4 pr-4" style={{}} />
            <div
              className="text-white pl-4 font-medium mt-2"
              style={{
                fontSize: 35,
                textAlign: "center",
                fontFamily: "'Roboto Condensed', sans-serif",
              }}
            >
              {f.title}
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button
                style={{
                  backgroundColor: "#ff3501",
                  fontSize: 12,
                }}
                className=" text-lg text-white px-4 py-1 rounded-full   cursor-pointer order_btn mt-4 "
              >
                Learn More
              </button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default about;
