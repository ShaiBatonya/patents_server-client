const register_form = document.querySelector("#register_form");
const nav_bar = document.querySelector("#nav_bar");
const patent_Number = document.querySelector("#patent_Number");
const patent_Name = document.querySelector("#patent_Name");
const patent_inventor = document.querySelector("#patent_inventor");
const patent_description = document.querySelector("#patent_description");
const result = document.querySelector("#result");
const container = document.querySelector(".container");
const url = "http://localhost:4000/patents";
const Patents_Journal = document.querySelector("#Patents_Journal");
const Patents_add = document.querySelector("#Patents_add");
const Search_btn = document.querySelector("#Search_btn");
const Search_input = document.querySelector("#Search_input");
const submit_btn = document.querySelector("#submit_btn");

/* function that bulids card and updates in the database  */
const buildCard = (obj) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card d-inline-block");

  const body = document.createElement("div");
  body.setAttribute("class", "card-body");

  const title = document.createElement("div");
  title.setAttribute("class", "card-title");
  title.style = "cursor: pointer";
  title.textContent = `Patent Id : ${obj._id}`;

  title.addEventListener("click", async () => {
    try {
      const response = await fetch(`${url}/get_by_id/${obj._id}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error("error in get patent by id from server");
      }

      alert(data.patent.patent_description);
    } catch (error) {
      console.log(error.message);
    }
  });

  const edit_icon = document.createElement("i");
  edit_icon.setAttribute("class", "fa-solid fa-pen-to-square");
  edit_icon.style = "cursor: pointer";
  edit_icon.addEventListener("click", () => {
    const input = document.createElement("input");
    input.value = obj.patent_Name;
    input.style = "width: 5rem; margin-right:1rem";

    body.replaceChild(input, title);
    body.removeChild(delete_icon);
    body.removeChild(edit_icon);

    const update_btn = document.createElement("i");
    update_btn.setAttribute("class", "fa-solid fa-floppy-disk");
    update_btn.style = "margin-left:5rem; cursor:pointer";
    body.append(update_btn);

    update_btn.addEventListener("click", async () => {
      const new_name = {
        patent_Name: input.value,
      };

      try {
        const response = await fetch(`${url}/update_by_id/${obj._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(new_name),
        });

        const data = await response.json();

        if (!data.success) {
          throw new Error("error in edit user name from server");
        }

        alert(`new name is : ${new_name.patent_Name}`);
        location.reload();
      } catch (error) {
        console.log(error.message);
      }
    });
  });

  const delete_icon = document.createElement("i");
  delete_icon.setAttribute("class", "fa-solid fa-trash");
  delete_icon.style = "cursor: pointer; margin-left: 16rem";

  delete_icon.addEventListener("click", async () => {
    try {
      const response = await fetch(`${url}/delete_by_id/${obj._id}`, {
        method: "DELETE",
      });

      const data = await response.json();

      alert(`Patent ${obj.patent_Name} deleted successfully`);
      location.reload();
    } catch (error) {
      console.log(error.message);
    }
  });

  const Name_P = document.createElement("div");
  Name_P.setAttribute("class", "card-title");
  Name_P.style = "cursor: pointer";
  Name_P.textContent = `Patent Name : ${obj.patent_Name}`;

  const Number_P = document.createElement("div");
  Number_P.setAttribute("class", "card-title");
  Number_P.style = "cursor: pointer";
  Number_P.textContent = `Patent Number : ${obj.patent_Number}`;

  const description_P = document.createElement("div");
  description_P.setAttribute("class", "card-title");
  description_P.style = "cursor: pointer";

  description_P.textContent = `Patent description : ${obj.patent_description}`;

  body.append(title, Name_P, Number_P, description_P, edit_icon, delete_icon);
  card.append(body);
  container.append(card);
};

/* async function that fetch url/all */
const getAllPatents = async () => {
  try {
    const response = await fetch(`${url}/all`);
    const data = await response.json();

    if (!data.success) {
      container.innerHTML = "error in get users from server";
      throw new Error("error in get users from server");
    }
    console.log(data.patent);
    for (const obj of data.patent) {
      buildCard(obj);
    }
  } catch (error) {
    console.log(error.message);
  }
};

/* async event listener that does fetch to the url/add, takes the properties of the input values with post method and updates it in the database  */
register_form.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`${url}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patent_Number: patent_Number.value,
        patent_Name: patent_Name.value,
        patent_inventor: patent_inventor.value,
        patent_description: patent_description.value,
      }),
    });

    const data = await response.json();

    if (
      !patent_Number.value ||
      !patent_Name.value ||
      !patent_inventor.value ||
      !patent_description.value
    ) {
      alert("Patent must have all properties");
    }

    if (!data.success) {
      throw new Error("error from server in registering the patent");
    }

    if (data.success) {
      setTimeout(() => {
        location.reload();
      }, 1500);
    }

    result.innerHTML = data.message;
  } catch (error) {
    result.innerHTML = error.message;
  }
});

/* event listener that call the get_all_patents function */
Patents_Journal.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    register_form.style.display = "none";
    Patents_Journal.style.display = "none";

    getAllPatents();
  } catch (error) {}
});

Patents_add.addEventListener("click", (event) => {
  event.preventDefault();
  try {
    location.reload();
  } catch (error) {}
});

/* event listener that takes search_input value and calls the function get_id_patents */
Search_btn.addEventListener("click", async (event) => {
  event.preventDefault();

  try {
    if (!Search_input.value) {
      alert("Please enter a valid value");
    }
    if (Search_input.value) {
      register_form.style.display = "none";
      Patents_Journal.style.display = "none";
      getIDPatents();
    }
  } catch (error) {
    console.log(error.message);
  }
});

/* async function that uses Search_input.value and searches it with get_by_id */
const getIDPatents = async () => {
  try {
    const response = await fetch(`${url}/get_by_id/${Search_input.value}`);
    const data = await response.json();
    container.innerHTML = "";
    buildCard(data.patent);
  } catch (error) {
    console.log(error.message);
  }
};
