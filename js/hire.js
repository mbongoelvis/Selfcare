const data = [
  {
    name: "Dr. John Smith",
    profession: "General Practitioner",
    description:
      "Dr. Smith is a general practitioner with over 20 years of experience. He is a skilled and experienced doctor who is dedicated to providing his patients with the best possible care.",
    image:
      "https://plus.unsplash.com/premium_photo-1661889727743-b22f803c692b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Jane Doe",
    profession: "Pediatrician",
    description:
      "Dr. Doe is a pediatrician with over 10 years of experience. She is a caring and compassionate doctor who is committed to the health and well-being of children.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. David Green",
    profession: "Oncologist",
    description:
      "Dr. Green is an oncologist with over 20 years of experience. He is a leading expert in the field of oncology and is dedicated to providing his patients with the best possible care.",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://plus.unsplash.com/premium_photo-1673757120943-a6d3b9a3f435?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://plus.unsplash.com/premium_photo-1674112877123-c8419badc6a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://plus.unsplash.com/premium_photo-1671718111036-0a4b73625a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://plus.unsplash.com/premium_photo-1672857821703-398f0bf20b15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Sarah Brown",
    profession: "Neurologist",
    description:
      "Dr. Brown is a neurologist with over 10 years of experience. She is a leading expert in the field of neurology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Dr. Susan Jones",
    profession: "Cardiologist",
    description:
      "Dr. Jones is a cardiologist with over 15 years of experience. She is a leading expert in the field of cardiology and is dedicated to providing her patients with the best possible care.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
let cards = " "
data.forEach((items) => {
    cards += `
     <div class="w-[20rem] h-[26rem] pb-3 flex flex-col rounded-lg border cursor-pointer items-center mb-3">
                <div class="w-[6rem] h-[6rem] bg-black bg-[url('${items.image}')] bg-center bg-cover bg-center hover:opacity-2 mt-5 rounded-[50%]">
                </div>
                <div class="py-3 px-4">
                    <h1 class="text-xl font-semibold mb-1 text-center">@${items.name}</h1>
                    <p class="text-center mb-4 font-bold opacity-75">${items.profession}</p>
                    <p class="opacity-[.6] mb-3 text-center">${items.description}</p>
                </div>
                 <a href="#" class="px-10 bg-blue-400 py-2 rounded-xl mx-7 text-lg font-semibold text-white hover:opacity-75">Hire</a>
                </div>
    `;
})
document.querySelector(".hire").innerHTML = cards