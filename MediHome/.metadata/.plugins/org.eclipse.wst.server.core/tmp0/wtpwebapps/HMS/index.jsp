
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Index Page</title>
<%@include file="Component/allcss.jsp"%>

<style type="text/css">
.point-card {
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}
</style>


</head>
<body>
	<%@include file="Component/Navbar.jsp"%>
	
	

	<div id="carouselExample" class="carousel slide">
		<div class="carousel-inner">

			<div class="carousel-item active">
				<img src="image/hos.jpeg" class="d-block w-100" alt="..."
					height="500px">
			</div>

			<div class="carousel-item">
				<img src="image/hos_2.jpeg" class="d-block w-100" alt="..."
					height="500px">
			</div>

			<div class="carousel-item">
				<img src="image/hos_3.jpeg" class="d-block w-100" alt="..."
					height="500px">
			</div>

		</div>
		<button class="carousel-control-prev" type="button"
			data-bs-target="#carouselExample" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span> <span
				class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button"
			data-bs-target="#carouselExample" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span> <span
				class="visually-hidden">Next</span>
		</button>
	</div>

	<div class="container p-3">
		<p class="text-center fs-2">Key Feature of our Hospital</p>

		<div class="row">
			<div class="col-md-8 p-5">
				<div class="row">
					<div class="col-md-6">
						<div class="card point-card">
							<div class="card-body">
								<p class="fs-5">100% Safety</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.</p>

							</div>
						</div>
					</div>

					<div class="col-md-6">
						<div class="card point-card">
							<div class="card-body">
								<p class="fs-5">Clean Envoirment</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.</p>

							</div>
						</div>
					</div>

					<div class="col-md-6">
						<div class="card point-card">
							<div class="card-body">
								<p class="fs-5">Freindly Doctors</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.</p>

							</div>
						</div>
					</div>

					<div class="col-md-6">
						<div class="card point-card">
							<div class="card-body">
								<p class="fs-5">Medical Research</p>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
									sed do eiusmod tempor incididunt ut labore et dolore magna
									aliqua.</p>

							</div>
						</div>
					</div>



				</div>
			</div>
			<div class="col-md-4 mt-5">
				<img alt="" src="image/doc_5.jpeg">
			</div>
		</div>
	</div>

	<hr>

	<div class="container p-2">
		<p class="text-center fs-2">Our Team</p>

		<div class="row">
			<div class="col-md-3">
				<div class="card point-card">
					<div class="card-body text-center">
						<img src="image/doc_1.jpeg" width="250px" height="300px">
						<p class="fw-bold fs-5"> Dr.Samuel Simi</p>
						<p class="fs-7">(CEO & CHAIRMAN)</p>
					</div>
				</div>
			</div>

			<div class="col-md-3">
				<div class="card point-card">
					<div class="card-body text-center">
						<img src="image/doc_2.jpeg" width="250px" height="300px">
						<p class="fw-bold fs-5">Dr.Scarlet Johnson</p>
						<p class="fs-7">(CHIEF DOCTOR)</p>
					</div>
				</div>
			</div>

			<div class="col-md-3">
				<div class="card point-card">
					<div class="card-body text-center">
						<img src="image/doc_3.jpeg" width="250px" height="300px">
						<p class="fw-bold fs-5">Dr.Charlotte Richardson</p>
						<p class="fs-7">(CHIEF DOCTOR)</p>
					</div>
				</div>
			</div>

			<div class="col-md-3">
				<div class="card point-card">
					<div class="card-body text-center">
						<img src="image/doc_4.jpeg" width="250px" height="300px">
						<p class="fw-bold fs-5">Dr.Nitish Jain</p>
						<p class="fs-7">(SURGEON)</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<%@include file="Component/Footer.jsp" %>

</body>
</html>