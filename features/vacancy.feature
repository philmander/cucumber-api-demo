Feature: Vacancies
  As a client application
  I want to manage vacancies

  Scenario: Add a vacancy
    Given I have an authorized session
    When I send a "POST" request to "/api/vacancies"
    Then I should receive a response with the status 201

  Scenario: Get a vacancy
    Given I have an authorized session
    When I send a "GET" request to "/api/vacancy"
    Then I should receive a response with the status 200
    And the response body should match the "test1" example