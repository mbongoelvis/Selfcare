const data = [
  {
    title: "New Study Reveals Link Between Exercise and Mental Health",
    description:
      "A recent study has found a strong correlation between regular exercise and improved mental health, highlighting the importance of physical activity for overall well-being.",
    image:
      "https://images.unsplash.com/photo-1691073123397-d93b4e3b9991?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Scientists Discover Potential Treatment for Alzheimer's Disease",
    description:
      "Researchers have identified a promising compound that shows potential in slowing down the progression of Alzheimer's disease, offering hope for future treatments.",
    image:
      "https://images.unsplash.com/photo-1658988958556-72342117610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Research Shows the Benefits of a Mediterranean Diet",
    description:
      "A comprehensive study has demonstrated the numerous health benefits of following a Mediterranean diet, including reduced risk of cardiovascular diseases and improved cognitive function.",
    image:
      "https://images.unsplash.com/photo-1661956602926-db6b25f75947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Finds Connection Between Sleep Quality and Mental Health",
    description:
      "A recent study has established a significant link between sleep quality and mental health, emphasizing the importance of prioritizing healthy sleep habits for overall well-being.",
    image:
      "https://images.unsplash.com/photo-1658988958556-72342117610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Vaccine Shows Promise in Preventing Malaria",
    description:
      "Scientists have developed a novel vaccine that demonstrates high efficacy in preventing malaria, a major global health concern affecting millions of people worldwide.",
    image:
      "https://plus.unsplash.com/premium_photo-1664356382524-80683e066a3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Research Highlights the Role of Gut Microbiome in Human Health",
    description:
      "Emerging research suggests that the gut microbiome plays a crucial role in human health, influencing various aspects such as digestion, immune function, and mental well-being.",
    image:
      "https://images.unsplash.com/photo-1656133440919-0775929dc15a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Study Shows the Health Benefits of Mindfulness Meditation",
    description:
      "A comprehensive study has demonstrated the positive impact of mindfulness meditation on mental health, stress reduction, and overall well-being.",
    image:
      "https://images.unsplash.com/photo-1691256853764-f9917b70e5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Researchers Discover Potential Breakthrough in Cancer Treatment",
    description:
      "Scientists have made a significant breakthrough in cancer treatment, uncovering a promising therapy that shows potential in targeting and destroying cancer cells.",
    image:
      "https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title:
      "New Study Finds Link Between Air Pollution and Respiratory Diseases",
    description:
      "A new study has established a clear association between air pollution and respiratory diseases, highlighting the need for effective measures to combat pollution and protect public health.",
    image:
      "https://images.unsplash.com/photo-1690826085941-3805cd31aadb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Scientists Discover Promising Drug Candidate for Treating Diabetes",
    description:
      "Researchers have identified a potential drug candidate that shows promise in treating diabetes, offering new possibilities for improved management of the disease.",
    image:
      "https://plus.unsplash.com/premium_photo-1670455445484-4ea7f83cfd4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title:
      "Study Shows the Benefits of Regular Physical Activity for Heart Health",
    description:
      "A comprehensive study has confirmed the significant benefits of engaging in regular physical activity for maintaining optimal heart health and reducing the risk of cardiovascular diseases.",
    image:
      "https://images.unsplash.com/photo-1691228398858-0dd821501aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Research Uncovers Genetic Factors in Mental Illness",
    description:
      "Groundbreaking research has identified specific genetic factors associated with various mental illnesses, providing valuable insights for diagnosis and potential treatment approaches.",
    image:
      "https://images.unsplash.com/photo-1690149347199-f1e5751e42f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Highlights the Importance of Vitamin D for Bone Health",
    description:
      "A comprehensive study has emphasized the crucial role of vitamin D in maintaining strong and healthy bones, underscoring the importance of sufficient vitamin D levels.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Scientists Develop New Method for Early Detection of Cancer",
    description:
      "Researchers have developed an innovative method for early detection of various types of cancer, potentially leading to improved survival rates and treatment outcomes.",
    image:
      "https://images.unsplash.com/photo-1690749110247-e50b70e71dc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Reveals the Impact of Stress on Mental and Physical Health",
    description:
      "A comprehensive study has demonstrated the detrimental effects of chronic stress on both mental and physical health, highlighting the importance of stress management techniques.",
    image:
      "https://plus.unsplash.com/premium_photo-1671650123234-85096b81babe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Study Reveals Link Between Exercise and Mental Health",
    description:
      "A recent study has found a strong correlation between regular exercise and improved mental health, highlighting the importance of physical activity for overall well-being.",
    image:
      "https://images.unsplash.com/photo-1682686578456-69ae00b0ecbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Scientists Discover Potential Treatment for Alzheimer's Disease",
    description:
      "Researchers have identified a promising compound that shows potential in slowing down the progression of Alzheimer's disease, offering hope for future treatments.",
    image:
      "https://images.unsplash.com/photo-1690823992618-e7010fe130d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Research Shows the Benefits of a Mediterranean Diet",
    description:
      "A comprehensive study has demonstrated the numerous health benefits of following a Mediterranean diet, including reduced risk of cardiovascular diseases and improved cognitive function.",
    image:
      "https://plus.unsplash.com/premium_photo-1671650123234-85096b81babe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Finds Connection Between Sleep Quality and Mental Health",
    description:
      "A recent study has established a significant link between sleep quality and mental health, emphasizing the importance of prioritizing healthy sleep habits for overall well-being.",
    image:
      "https://images.unsplash.com/photo-1689699545029-22d52797f687?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Vaccine Shows Promise in Preventing Malaria",
    description:
      "Scientists have developed a novel vaccine that demonstrates high efficacy in preventing malaria, a major global health concern affecting millions of people worldwide.",
    image:
      "https://plus.unsplash.com/premium_photo-1690971631390-4f3fa92315f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Research Highlights the Role of Gut Microbiome in Human Health",
    description:
      "Emerging research suggests that the gut microbiome plays a crucial role in human health, influencing various aspects such as digestion, immune function, and mental well-being.",
    image:
      "https://images.unsplash.com/photo-1690375560372-897e3a1195d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Study Shows the Health Benefits of Mindfulness Meditation",
    description:
      "A comprehensive study has demonstrated the positive impact of mindfulness meditation on mental health, stress reduction, and overall well-being.",
    image:
      "https://plus.unsplash.com/premium_photo-1689838026693-02c808d3c794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Researchers Discover Potential Breakthrough in Cancer Treatment",
    description:
      "Scientists have made a significant breakthrough in cancer treatment, uncovering a promising therapy that shows potential in targeting and destroying cancer cells.",
    image:
      "https://images.unsplash.com/photo-1626375555783-f5fc7149e03f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title:
      "New Study Finds Link Between Air Pollution and Respiratory Diseases",
    description:
      "A new study has established a clear association between air pollution and respiratory diseases, highlighting the need for effective measures to combat pollution and protect public health.",
    image:
      "https://plus.unsplash.com/premium_photo-1690820317284-9369ca82c397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Scientists Discover Promising Drug Candidate for Treating Diabetes",
    description:
      "Researchers have identified a potential drug candidate that shows promise in treating diabetes, offering new possibilities for improved management of the disease.",
    image:
      "https://images.unsplash.com/photo-1691302174364-1958bc3d3ff8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title:
      "Study Shows the Benefits of Regular Physical Activity for Heart Health",
    description:
      "A comprehensive study has confirmed the significant benefits of engaging in regular physical activity for maintaining optimal heart health and reducing the risk of cardiovascular diseases.",
    image:
      "https://images.unsplash.com/photo-1682685797332-e678a04f8a64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "New Research Uncovers Genetic Factors in Mental Illness",
    description:
      "Groundbreaking research has identified specific genetic factors associated with various mental illnesses, providing valuable insights for diagnosis and potential treatment approaches.",
    image:
      "https://images.unsplash.com/photo-1690850707632-aa1efafc18cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Highlights the Importance of Vitamin D for Bone Health",
    description:
      "A comprehensive study has emphasized the crucial role of vitamin D in maintaining strong and healthy bones, underscoring the importance of sufficient vitamin D levels.",
    image:
      "https://images.unsplash.com/photo-1690993660127-1a7cdd87ec9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Highlights the Importance of Vitamin D for Bone Health",
    description:
      "A comprehensive study has emphasized the crucial role of vitamin D in maintaining strong and healthy bones, underscoring the importance of sufficient vitamin D levels.",
    image:
      "https://plus.unsplash.com/premium_photo-1691009758120-9b3a2e0d688d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Highlights the Importance of Vitamin D for Bone Health",
    description:
      "A comprehensive study has emphasized the crucial role of vitamin D in maintaining strong and healthy bones, underscoring the importance of sufficient vitamin D levels.",
    image:
      "https://images.unsplash.com/photo-1690751472154-0b608942106c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Study Highlights the Importance of Vitamin D for Bone Health",
    description:
      "A comprehensive study has emphasized the crucial role of vitamin D in maintaining strong and healthy bones, underscoring the importance of sufficient vitamin D levels.",
    image:
      "https://images.unsplash.com/photo-1691142750541-2ec61bb9d23d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Scientists Develop New Method for Early Detection of Cancer",
    description:
      "Researchers have developed an innovative method for early detection of various types of cancer, potentially leading to improved survival rates and treatment outcomes.",
    image:
      "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];

let cards = " ";
data.forEach((items) => {
  cards += `
     <div class="min-w-[23rem] pb-5 min-h-[32rem] rounded-lg border cursor-pointer">
                <div class="w-full h-[15rem] bg-black bg-[url('${items.image}')] bg-center bg-cover bg-center hover:opacity-2">
                </div>
                <div class="py-3 px-4">
                    <h1 class="text-xl font-semibold mb-3">${items.title}</h1>
                    <p class="opacity-[.6] mb-3">
                    ${items.description}</p>
                </div>
                 <a href="#" class="w-full bg-blue-400 px-[30%] py-3 rounded-xl mx-7 text-lg font-semibold text-white hover:opacity-75">learn more</a>
            </div>
    `;
});
document.querySelector(".news").innerHTML = cards;
