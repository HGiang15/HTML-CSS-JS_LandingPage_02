/* Features */
const dots = document.querySelectorAll(".feedback .dots .dot");
const feedbacks = document.querySelectorAll(".feedback .feedback-item");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // feedbacks.forEach((feedback) => {
    //   feedback.style.cssText = `
    //     transform: translateX(calc(${index} * -100%));
    //     transition: all ease 0.3s;
    //   `;
    // });

    dots.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});

/* Blog */
const dotsOfBlog = document.querySelectorAll(".blog .dots .dot");
const blogList = document.querySelector(".blog .blog-list");
const blogItems = document.querySelectorAll(".blog .blog-item");
const gapOfBlogList = parseInt(getComputedStyle(blogList).gap);
dotsOfBlog.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    // blogItems.forEach(blogItem => {
    //     const itemQnt = index * 3;
    //     blogItem.style.cssText = `
    //         transform: translateX(calc(-${itemQnt}00% - ${gapOfBlogList}px * ${itemQnt}));
    //         transition: all ease 0.3s;
    //     `;
    // })
    dotsOfBlog.forEach((dot) => dot.classList.remove("active"));
    dot.classList.add("active");
  });
});

// // Lấy các dấu chấm và danh sách blog từ tài liệu HTML
// const dots = document.querySelectorAll('.blog .dots .dot');
// const blogList = document.querySelector('.blog .blog-list');
// const items = document.querySelectorAll('.blog .blog-list .item');

// // Số lượng mục trên mỗi trang
// const itemsPerPage = 3;

// // Lấy kích thước của một mục và khoảng cách giữa các mục
// const itemWidth = items[0].offsetWidth;
// const gap = parseInt(getComputedStyle(blogList).gap, 10);

// // Tính toán khoảng cách dịch chuyển theo công thức
// function calculateDistance() {
//     return (itemWidth * itemsPerPage) + (gap * (itemsPerPage - 1));
// }

// // Hàm để hiển thị trang và chuyển đổi danh sách bài viết
// function showPage(pageIndex) {
//     // Tính toán giá trị dịch chuyển
//     const distance = calculateDistance();
//     const translateX = -(pageIndex * distance);

//     // Áp dụng giá trị dịch chuyển cho danh sách bài viết
//     blogList.style.transform = `translateX(${translateX}px)`;
//     blogList.style.transition = 'transform 0.3s ease';
//     blogList.style.overflow = 'visible';

//     // Cập nhật lớp active cho dấu chấm
//     dots.forEach((dot, idx) => {
//         // Loại bỏ lớp active khỏi các dấu chấm khác và thêm vào dấu chấm hiện tại
//         dot.classList.toggle('active', idx === pageIndex);
//     });
// }

// // Thêm sự kiện nhấp vào dấu chấm
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         // Hiển thị trang tương ứng khi nhấp vào dấu chấm
//         showPage(index);
//     });
// });

// // Hiển thị trang đầu tiên khi tải trang
// showPage(0);
