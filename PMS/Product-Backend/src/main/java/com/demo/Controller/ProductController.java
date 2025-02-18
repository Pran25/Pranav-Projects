package com.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Model.Product;
import com.demo.Service.ProductService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ProductController {
	@Autowired
	private ProductService service;
	
	@PostMapping("/saveprod")
	public ResponseEntity<?>saveproduct(@RequestBody Product product)
	{
		return new ResponseEntity<>(service.saveproduct(product),HttpStatus.CREATED);
		
	}
	@GetMapping("/products")
	public ResponseEntity<?> getAllProduct()
	{
		return new ResponseEntity<>(service.getallproduct(),HttpStatus.OK);
		
	}
	@GetMapping("/products/{id}")
	public ResponseEntity<?> getProductsbyId(@PathVariable Long id)
	{
		return new ResponseEntity<>(service.getproductbyid(id),HttpStatus.OK);
		
	}
	@DeleteMapping("/productdelete/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
	    try {
	        service.deleteproduct(id);
	        return ResponseEntity.ok().build();
	    } catch (RuntimeException e) {
	        // Handle specific exceptions, e.g., product not found
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	    } catch (Exception e) {
	        // Log the exception for debugging
	        System.err.println("An error occurred: " + e.getMessage());
	        e.printStackTrace(); // Log the stack trace
	        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred while deleting the product.");
	    }
	}

	@PostMapping("/editproduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody Product product,@PathVariable Long id)
	{
		return new ResponseEntity<>(service.saveproduct(product),HttpStatus.CREATED);
		
	}

}
